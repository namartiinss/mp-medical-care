// tailwind.config.js

module.exports = {
  // ... outras configurações
  theme: {
    extend: {
      screens: {
        // Mobile: Estilos base (não precisa de prefixo, mas se fosse um mínimo seria '414px')
        // sm: '414px', // Não recomendado, pois 'sm' do Tailwind é 640px
        
        // Mobile (max-width para ajustes específicos, opcional)
        'mobile-max': { 'max': '414px' }, // Uso: mobile-max:text-sm

        // Tablet (Se adapta a partir de 720px)
        'md': '720px',

        // Desktop (Se adapta a partir de 1440px)
        'xl': '1440px',
        
        // O valor padrão 'lg' (1024px) pode ser usado como um intermediário
        // Se você não o incluir aqui, ele usará o 'lg' padrão do Tailwind.
      },
      // ...
    },
  },
  // ...
};