import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Config from "../constants/config";

const Register = () => {
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    axios.post(Config.BASE_URL + "/api/auth/register", data)
    .then(() => {alert("Cuenta creada exitosamente"); 
      navigate("/login")})
    .catch((err) => console.log(err));
  };

  return (
    <section className="bg-dark text-white h-screen overflow-auto font-urbanist p-4 flex justify-center
     items-center bg-[url(/images/MobileShades.png)] bg-no-repeat bg-right-bottom md:bg-[url(/images/shadeDesktop.png)] 
     md:bg-contain md:bg-right-bottom">
      <article className="sm:grid sm:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block">
          <img className="rounded-xl max-w-[350px]" src="/images/Register.png" alt="" />
        </div>

        <main className="">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <h2 className="text-3xl uppercase font-semibold">Cuenta nueva</h2>
            <label className="grid" htmlFor="email">
              <span className="text-white/60">E-mail</span>
              <input className="bg-transparent border-b border-secondary outline-none text-lg" type="email" name="email" required />
            </label>

            <label className="grid" htmlFor="name">
              <span className="text-white/60">Name</span>
              <input className="bg-transparent border-b border-secondary outline-none text-lg" type="text" name="name" required />
            </label>

            <label className="grid" htmlFor="password">
              <span className="text-white/60">Password</span>
              <input className="bg-transparent border-b border-secondary outline-none text-lg" type="password" name="password" required />
            </label>

            <button
              type="submit"
              className="bg-primary-light uppercase font-semibold p-2 max-w-max rounded-full px-8 mx-auto mt-8 shadow-md shadow-purple-400/50 hover:shadow-xl transition-all hover:tracking-widest"
            >
              Crear
            </button>
          </form>
          <Link className="max-w-max mx-auto text-sm underline flex justify-center p-4" to="/login">
            O iniciar sesion
          </Link>
        </main>
      </article>
    </section>
  );
};

export default Register