import React from "react";

const UserForm = () => {
  return (
    <>
      {/* Name */}
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
        />
      </div>

      {/* Email */}
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu melhor email"
          required
        />
      </div>
    </>
  );
};

export default UserForm;
