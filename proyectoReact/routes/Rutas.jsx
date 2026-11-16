
// route / ya me carga la pagina no hace falta llamar al componente inicio
const Rutas = () => {
  return (
    <>
      <div className="Rutas">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/acercade" element={<AcerdaDe />} />
          <Route path="*" element={<Error />} />
          <Route path="/PaginaPeliculas"element={<PaginaPeliculas/>}/>
        </Routes>
      </div>
    </>
  );
};
export default Rutas;