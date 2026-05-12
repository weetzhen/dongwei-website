import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="text-center">
          <img
            src="https://static.readdy.ai/image/56a845be1a5727084d33993c880f54d5/1b380287d61b66cf71a4263d95fcff1b.png"
            alt="Dongwei Tools"
            className="h-14 w-auto object-contain mx-auto"
          />
        </div>
      </div>
    </footer>
  );
}
