const alojamientosIniciales = [
  {
    id: 1,
    nombre: "Finca El Pinar del Vinalopó",
    municipio: "Biar",
    tipo: "Casa Rural",
    capacidad: 8,
    precioNoche: 140.0,
    servicios: ["piscina", "barbacoa", "wifi", "chimenea"],
    detalles: {
      fechaAlta: "2023-04-15",
      calificacion: 4.8,
      contacto: {
        propietario: "Marta Ruiz",
        telefono: "654-987-321",
      },
    },
  },
  {
    id: 2,
    nombre: "El Refugio de Castalla",
    municipio: "Castalla",
    tipo: "Cabaña",
    capacidad: 4,
    precioNoche: 85.5,
    servicios: ["wifi", "chimenea", "calefaccion"],
    detalles: {
      fechaAlta: "2024-01-10",
      calificacion: 4.2,
      contacto: {
        propietario: "Carlos Bernabé",
        telefono: "611-223-344",
      },
    },
  },
  {
    id: 3,
    nombre: "Masía Sierra de Mariola",
    municipio: "Banyeres",
    tipo: "Masía",
    capacidad: 12,
    precioNoche: 220.0,
    servicios: ["piscina", "barbacoa", "wifi", "admitenMascotas"],
    detalles: {
      fechaAlta: "2022-11-05",
      calificacion: 4.9,
      contacto: {
        propietario: "Lucía Silvestre",
        telefono: "688-554-112",
      },
    },
  },
  {
    id: 4,
    nombre: "Villa Cueva Morisca",
    municipio: "Bocairent",
    tipo: "Casa Cueva",
    capacidad: 5,
    precioNoche: 110.0,
    servicios: ["wifi", "jacuzzi", "calefaccion"],
    detalles: {
      fechaAlta: "2023-09-20",
      calificacion: 4.6,
      contacto: {
        propietario: "Javier Ferre",
        telefono: "677-441-889",
      },
    },
  },
  {
    id: 5,
    nombre: "Albergue Las Salinetas",
    municipio: "Salinas",
    tipo: "Albergue",
    capacidad: 16,
    precioNoche: 160.0,
    servicios: ["piscina", "barbacoa", "pistaTenis"],
    detalles: {
      fechaAlta: "2024-06-01",
      calificacion: 3.9,
      contacto: {
        propietario: "Sergio Amorós",
        telefono: "633-882-991",
      },
    },
  },
  {
    id: 6,
    nombre: "La Torreta del Castillo",
    municipio: "Sax",
    tipo: "Casa Rural",
    capacidad: 6,
    precioNoche: 95.0,
    servicios: ["wifi", "chimenea", "barbacoa"],
    detalles: {
      fechaAlta: "2023-02-18",
      calificacion: 4.4,
      contacto: {
        propietario: "Elena Chico",
        telefono: "622-334-556",
      },
    },
  },
];

const nuevaOferta = {
  id: Date.now(), // Marca de tiempo única
  nombre: "Casa de Campo La Solana",
  municipio: "Monóvar",
  tipo: "Casa Rural",
  capacidad: 10,
  precioNoche: 99.0,
  servicios: ["barbacoa", "wifi", "piscina"],
  detalles: {
    fechaAlta: "2025-06-01",
    calificacion: 4.7,
    contacto: { propietario: "Vicente Rico", telefono: "600-112-233" },
  },
};

export { alojamientosIniciales, nuevaOferta };
