import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useAppContext } from '../contexts/AppContext';
import { db } from '../config/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { BookOpen, Edit3, Save, Loader2 } from 'lucide-react';
import { modules } from '../data/modules';

interface ReflectionDoc {
  id: string;
  moduleId: string;
  sectionId: string;
  reflection: string;
  timestamp: string;
}

export const MyReflectionsPage: React.FC = () => {
  const { user } = useAppContext();
  const [reflections, setReflections] = useState<ReflectionDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) return;
    const fetchReflections = async () => {
      setLoading(true);
      const refCol = collection(db, 'artifacts', 'lets-talk-app', 'users', user.uid, 'reflections');
      const snapshot = await getDocs(refCol);
      const docs: ReflectionDoc[] = snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as ReflectionDoc));
      setReflections(docs.sort((a, b) => b.timestamp.localeCompare(a.timestamp)));
      setLoading(false);
    };
    fetchReflections();
  }, [user]);

  const getModuleSectionTitle = (moduleId: string, sectionId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return 'Unknown Module';
    const section = module.sections.find(s => s.id === sectionId);
    if (!section) return module.title;
    return `${module.title} — ${section.type === 'thoughtExperiment' ? 'Thought Experiment' : section.title || section.type}`;
  };

  const handleEdit = (id: string, value: string) => {
    setEditingId(id);
    setEditValue(value);
  };

  const handleSave = async (reflection: ReflectionDoc) => {
    if (!user) return;
    setSaving(true);
    const refDoc = doc(db, 'artifacts', 'lets-talk-app', 'users', user.uid, 'reflections', reflection.id);
    await updateDoc(refDoc, { reflection: editValue, timestamp: new Date().toISOString() });
    setReflections(reflections.map(r => r.id === reflection.id ? { ...r, reflection: editValue, timestamp: new Date().toISOString() } : r));
    setEditingId(null);
    setEditValue('');
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <Loader2 className="animate-spin h-8 w-8 text-primary-600" />
        <span className="ml-3 text-gray-600">Loading reflections...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-4 slide-up">
        <BookOpen className="h-12 w-12 text-primary-600 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-900">My Reflections</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          View and edit your saved reflections from thought experiments.
        </p>
      </div>
      {reflections.length === 0 ? (
        <Card className="text-center">
          <p className="text-gray-600">You have not saved any reflections yet.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {reflections.map(ref => (
            <Card key={ref.id} className="space-y-2">
              <div className="flex items-center space-x-2 mb-1">
                <Edit3 className="h-5 w-5 text-primary-600" />
                <span className="font-medium text-gray-900">
                  {getModuleSectionTitle(ref.moduleId, ref.sectionId)}
                </span>
                <span className="ml-auto text-xs text-gray-400">
                  {new Date(ref.timestamp).toLocaleString()}
                </span>
              </div>
              {editingId === ref.id ? (
                <>
                  <textarea
                    className="input-field mt-1"
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    rows={3}
                  />
                  <div className="flex justify-end space-x-2 mt-2">
                    <Button
                      variant="secondary"
                      onClick={() => { setEditingId(null); setEditValue(''); }}
                      disabled={saving}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleSave(ref)}
                      disabled={saving || !editValue.trim()}
                    >
                      {saving ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                      Save
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex items-start">
                  <p className="text-gray-800 flex-1 whitespace-pre-line">{ref.reflection}</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="ml-4"
                    onClick={() => handleEdit(ref.id, ref.reflection)}
                  >
                    <Edit3 className="h-4 w-4 mr-1" /> Edit
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}; 