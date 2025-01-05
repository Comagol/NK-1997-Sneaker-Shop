import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentMethod: '', // 'transfer' or 'card'
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    bankAccount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar el pago
    console.log('Datos del formulario:', formData);
  };

  const handleCancel = () => {
    // Lógica para cancelar la compra
    console.log('Compra cancelada');
  };

  return (
    <div className="checkout-form-container">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Nombre:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Teléfono:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Método de Pago:
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="transfer">Transferencia</option>
            <option value="card">Tarjeta</option>
          </select>
        </label>

        {formData.paymentMethod === 'card' && (
          <div className="card-details">
            <label>
              Número de Tarjeta:
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Fecha de Expiración:
              <input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                name="cardCVV"
                value={formData.cardCVV}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        )}

        {formData.paymentMethod === 'transfer' && (
          <div className="transfer-details">
            <label>
              Cuenta Bancaria:
              <input
                type="text"
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        )}

        <div className="button-group">
          <button type="submit">Pagar</button>
          <button type="button" onClick={handleCancel}>
            Cancelar Compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
