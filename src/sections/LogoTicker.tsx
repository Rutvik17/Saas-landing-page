import Image from "next/image";
import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import apexLogo from '@/assets/logo-apex.png';
import pulseLogo from '@/assets/logo-pulse.png';

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="Acme logo"
            />
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="Quantum logo"
            />
            <Image
              className="logo-ticker-image"
              src={echoLogo}
              alt="Echo logo"
            />
            <Image
              className="logo-ticker-image"
              src={celestialLogo}
              alt="Celestial logo"
            />
            <Image
              className="logo-ticker-image"
              src={pulseLogo}
              alt="Pulse logo"
            />
            <Image
              className="logo-ticker-image"
              src={apexLogo}
              alt="Apex logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
