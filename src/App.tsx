import { useState, useEffect } from 'react';
import { MainPage } from './main/MainPage';
import { ExaniSimulator } from './apps/exani/ExaniSimulator';
import { IpnSimulator } from './apps/ipn/IpnSimulator';
import { Lock } from './shared/components/icons';
import { simulators } from './shared/data/simulators';

export type AppView = 'main' | 'exani' | 'ipn' | 'unam';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('main');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectSimulator = (simulator: { id: string }) => {
    if (simulator.id === 'exani') setCurrentView('exani');
    else if (simulator.id === 'ipn') setCurrentView('ipn');
    else if (simulator.id === 'unam') setCurrentView('unam');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white">EstudiandoAndo</h2>
          <p className="text-slate-400 mt-2">Cargando simuladores...</p>
        </div>
      </div>
    );
  }

  // Locked UNAM page
  if (currentView === 'unam') {
    const unamSimulator = simulators.find(s => s.id === 'unam');
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={handleBackToMain}
            className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            ← Volver al inicio
          </button>
          
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
              <Lock className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {unamSimulator?.name}
            </h1>
            <p className="text-xl text-blue-400 mb-6">Próximamente</p>
            <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
              Estamos trabajando en el simulador para el examen de admisión de la 
              <span className="text-white font-medium"> Universidad Nacional Autónoma de México</span>. 
              ¡Muy pronto estará disponible!
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {unamSimulator?.areas.map((area, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
            <button
              onClick={handleBackToMain}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
            >
              Explorar otros simuladores
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {currentView === 'main' && (
        <MainPage onSelectSimulator={handleSelectSimulator} />
      )}
      {currentView === 'exani' && (
        <ExaniSimulator onBack={handleBackToMain} />
      )}
      {currentView === 'ipn' && (
        <IpnSimulator onBack={handleBackToMain} />
      )}
    </div>
  );
}

export default App;
