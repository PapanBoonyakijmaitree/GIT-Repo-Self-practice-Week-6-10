document.addEventListener('DOMContentLoaded', () => {
  const FONT_MAP = { 'small': '14px', 'medium': '18px', 'large': '24px' };
  const DEFAULTS = { bg: '#ffffff', font: '#000000', size: 'medium' };
  const KEYS = { bg: 'themeBgColor', font: 'themeFontColor', size: 'themeFontSize' };

  const [body, form, bgInput, fontInput, sizeInput, resetBtn] = [
    document.body,
    document.getElementById('themeForm'),
    document.getElementById('bgColor'),
    document.getElementById('fontColor'),
    document.getElementById('fontSize'),
    document.getElementById('resetBtn')
  ];

  const applyStyles = (settings) => {
    body.style.backgroundColor = settings.bg;
    body.style.color = settings.font;
    body.style.fontSize = FONT_MAP[settings.size] || FONT_MAP[DEFAULTS.size];
  };

  const updateForm = (settings) => {
    bgInput.value = settings.bg;
    fontInput.value = settings.font;
    sizeInput.value = settings.size;
  };

  const loadSettings = () => {
    // ใช้ ?? (Nullish Coalescing) เพื่อดึงค่า, ถ้าไม่มี (null) ให้ใช้ค่า DEFAULTS
    const settings = {
      bg: localStorage.getItem(KEYS.bg) ?? DEFAULTS.bg,
      font: localStorage.getItem(KEYS.font) ?? DEFAULTS.font,
      size: localStorage.getItem(KEYS.size) ?? DEFAULTS.size
    };
    applyStyles(settings);
    updateForm(settings);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // ป้องกันหน้ารีเฟรช
    const settings = {
      bg: bgInput.value,
      font: fontInput.value,
      size: sizeInput.value
    };
    
    localStorage.setItem(KEYS.bg, settings.bg);
    localStorage.setItem(KEYS.font, settings.font);
    localStorage.setItem(KEYS.size, settings.size);
    
    applyStyles(settings); 
  });

  resetBtn.addEventListener('click', () => {
    localStorage.clear(); 
    applyStyles(DEFAULTS); 
    updateForm(DEFAULTS); 
  });

  loadSettings();
});