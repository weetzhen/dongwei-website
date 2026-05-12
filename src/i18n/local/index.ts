const modules = import.meta.glob('./*/*.ts', { eager: true });

const messages: Record<string, { translation: Record<string, string> }> = {};

Object.keys(modules).forEach((path) => {
  const match = path.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
  if (match) {
    const [, lang] = match;
    const module = modules[path] as {
      default?: Record<string, string>;
      translation?: Record<string, string>;
    };

    if (!messages[lang]) {
      messages[lang] = { translation: {} };
    }

    // 优先使用 named export "translation"，其次使用 default export
    const content = module.translation || module.default;
    if (content) {
      messages[lang].translation = {
        ...messages[lang].translation,
        ...content,
      };
    }
  }
});

export default messages;
