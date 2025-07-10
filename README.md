# Let's Talk - Critical Thinking Journey

A web application designed to help users critically examine and potentially shift their perspectives on media narratives through interactive thought experiments, factual resources, and reflective exercises.

## 🎯 Project Goal

To create an interactive web application that guides users through a series of thought experiments, provides factual resources, presents direct quotes, and includes reflective tests, all aimed at fostering critical thinking and helping users understand and counteract the influence of media narratives.

## ✨ Features

### Core Functionality
- **Thought Experiments**: Interactive scenarios that challenge assumptions and expand perspectives
- **Module System**: Structured learning modules with progress tracking
- **Resource Library**: Curated collection of books, articles, documentaries, and organizations
- **Interactive Quizzes**: Assessment tools to test understanding and track progress
- **Personal Reflections**: Save and edit your thoughts on each experiment
- **AI-Powered Prompts**: Dynamic reflection prompts generated using Gemini API

### Technical Features
- **User Authentication**: Anonymous sign-in with Firebase Auth
- **Progress Tracking**: Real-time progress saved to Firestore
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Error Handling**: Graceful error recovery and user-friendly error messages

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase project (for authentication and data storage)
- Gemini API key (for AI-powered prompts)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Let-s-Talk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Firebase Configuration**
   The Firebase configuration is already set up in `src/config/firebase.ts`. Ensure your Firebase project has:
   - Authentication enabled (Anonymous sign-in)
   - Firestore database created
   - Appropriate security rules

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── LoadingSpinner.tsx
│   ├── ErrorBoundary.tsx
│   ├── ThoughtExperimentDisplay.tsx
│   ├── QuoteDisplay.tsx
│   └── Quiz.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── ModulesPage.tsx
│   ├── ModulePage.tsx
│   ├── ResourcesPage.tsx
│   ├── TestsPage.tsx
│   └── MyReflectionsPage.tsx
├── contexts/           # React Context providers
│   └── AppContext.tsx
├── services/           # External service integrations
│   ├── firebase.ts
│   └── gemini.ts
├── config/             # Configuration files
│   └── firebase.ts
├── data/               # Static data and content
│   ├── modules.ts
│   └── resources.ts
├── types/              # TypeScript type definitions
│   └── index.ts
└── index.css           # Global styles
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with recommended rules
- **Prettier**: Code formatting (configured via ESLint)
- **Tailwind CSS**: Utility-first CSS framework

### Testing

The application includes comprehensive testing for:
- **Functional Testing**: All user interactions and features
- **Responsive Testing**: Cross-device compatibility
- **Accessibility Testing**: WCAG compliance and keyboard navigation
- **Error Handling**: Graceful error recovery

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment Options

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your repository for automatic deployments
- **Firebase Hosting**: Use Firebase CLI for hosting
- **Any static hosting service**: The app is a static SPA

### Environment Variables for Production

Ensure your production environment has:
- `VITE_GEMINI_API_KEY`: Your Gemini API key
- Firebase configuration (already included in the code)

## 🔧 Configuration

### Adding New Modules

1. Edit `src/data/modules.ts`
2. Add a new module object with the required structure
3. Include sections of type: `thoughtExperiment`, `quote`, `text`, `resourceLink`, or `quiz`

### Adding New Resources

1. Edit `src/data/resources.ts`
2. Add a new resource object with: `id`, `type`, `title`, `description`, and `url`

### Customizing Styles

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Components**: Update component styles in `src/index.css`
- **Animations**: Add custom animations in the CSS file

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Firebase**: For authentication and data storage
- **Gemini API**: For AI-powered content generation
- **Tailwind CSS**: For the utility-first CSS framework
- **Lucide React**: For beautiful icons
- **Vite**: For fast development and building

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ for critical thinking and perspective examination**
