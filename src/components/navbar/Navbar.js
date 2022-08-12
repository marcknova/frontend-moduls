export default function Navbar() {
  return (
    <header className="flex h-auto p-5 bg-blue-500">
      <div className="w-full">
        <h1 className="text-white">Imagen mamalona</h1>
      </div>
      <nav className="w-full text-white">
        <ul className="flex flex-row justify-end">
          <li className="mx-3">Buscador</li>
          <li className="mx-3">Dark-Mode</li>
          <li className="mx-3">Iniciar sesion</li>
        </ul>
      </nav>
    </header>
  );
}
