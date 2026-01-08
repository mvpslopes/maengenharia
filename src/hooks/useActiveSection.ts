import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'quem-somos', 'servicos', 'trabalhos', 'contato'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset para considerar o header fixo

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
      
      // Se estiver no topo, definir como 'home'
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Chama uma vez para definir o estado inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}
