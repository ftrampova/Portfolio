
export default function Footer() {
  return (
   <footer className="bg-orange-500 pt-2 pb-8 px-4">
      {/* Wrapper - същия стил като AboutSection */}
      <div className="bg-slate-900 text-white mx-auto p-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-center">
        <p className="text-lg font-semibold">Контакти</p>
        <p className="mt-2">📧 fati.trampova@gmail.com</p>
        <p>📞 +359 893 601 674</p>
          <div className="text-center mt-4 text-sm text-white/70">
        &copy; {new Date().getFullYear()} Fatme Trampova. All rights reserved.
      </div>
      </div>
    
    </footer>
  );
}
