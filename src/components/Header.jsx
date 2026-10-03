import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  // Función para destacar visualmente el enlace activo
  const navLinkClass = ({ isActive }) =>
    `px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${isActive
      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm'
      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
    }`;
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo con Link para volver al inicio sin recargar la página */}
          <Link to="/" className="flex items-center gap-2 text-white no-underline group">
            <span className="text-xl">🛍️</span>
            <span className="text-lg font-black tracking-tight group-hover:text-emerald-400 transition-colors">
              Dummy<span className="text-emerald-400">JSON</span> Tienda
            </span>
          </Link>

          {/* Menú de Navegación con NavLink */}
          <nav className="flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              <span>🏠</span>
              <span>Inicio</span>
            </NavLink>

            <NavLink to="/laptop" className={navLinkClass}>
              <span>💻</span>
              <span>Laptops</span>
            </NavLink>

             <NavLink to="/movil" className={navLinkClass}>
              <span>📱</span>
              <span>Móviles</span>
            </NavLink>
            
            <NavLink to="/Beauty" className={navLinkClass}>
              <span>💻</span>
              <span>Beauty</span>
            </NavLink>
             
            <NavLink to="/Tablet" className={navLinkClass}>
              <span>💻</span>
              <span>Tablets</span>
            </NavLink>

            <NavLink to="/Vehicle" className={navLinkClass}>
              <span>💻</span>
              <span>vehiculo</span>
            </NavLink>

            <NavLink to="/Motorcycle" className={navLinkClass}>
              <span>💻</span>
              <span>motorcycle</span>
            </NavLink>



          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;