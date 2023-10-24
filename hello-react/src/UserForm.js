import { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    username: 'romain',
    gender: 'Male',
    isActive: true,
  });

  function handleSubmit(event) {
    event.preventDefault(); // désactive le formulaire
    console.log(user);
  }

  function handleChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const key = event.target.name;
    setUser({
      ...user, // reprendre les valeurs de l'objet user
      [key]: value, // écrit à la clé qui est dans la variable key
    });
  }

  return (
    <form className="UserForm" onSubmit={handleSubmit}>
      <div>
        Username : <input type="text" name="username" value={user.username} onChange={handleChange} />
      </div>
      <div>
        Gender :{' '}
        <select name="gender" value={user.gender} onChange={handleChange}>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        Active : <input type="checkbox" name="isActive" checked={user.isActive} onChange={handleChange} />
      </div>
      <div>
        <button>+</button>
      </div>
      <p>User : {JSON.stringify(user)}</p>
    </form>
  );
}

export default UserForm;
