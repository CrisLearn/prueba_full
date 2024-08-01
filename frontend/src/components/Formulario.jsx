import React from 'react';

const Formulario = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4 text-center">Ingreso de paciente</h3>
        <form>
          {/* Campo de nombre */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-sky-900 focus:ring-2 focus:outline-none"
              placeholder="Ingrese el nombre"
            />
          </div>

          {/* Campo de apellidos */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Apellidos</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-sky-900 focus:ring-2 focus:outline-none"
              placeholder="Ingrese los apellidos"
            />
          </div>

          {/* Campo de edad */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Edad</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-sky-900 focus:ring-2 focus:outline-none"
              placeholder="Ingrese la edad"
            />
          </div>

          {/* Campo de condición */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Condición</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-sky-900 focus:ring-2 focus:outline-none"
              placeholder="Ingrese la condición"
            />
          </div>

          {/* Campo de comida */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Comida</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-sky-900 focus:ring-2 focus:outline-none"
            >
              <option value="">Seleccione</option>
              <option value="blanda">Blanda</option>
              <option value="normal">Normal</option>
              <option value="liquida">Líquida</option>
            </select>
          </div>

          {/* Campo de fecha de ingreso */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Fecha de Ingreso</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-sky-900 focus:ring-2 focus:outline-none"
            />
          </div>

          {/* Campo de fecha de egreso */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Fecha de Egreso</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-sky-900 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;

