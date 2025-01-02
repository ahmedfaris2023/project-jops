const Register = () => {
  return (
    <div className="h-auto bg-primary mt-[300px] px-4 md:px-8 pt-10 md:pt-20">
      <div className="text-white text-2xl md:text-4xl font-bold text-center md:text-left">
        What are you waiting for?
      </div>
      <div className="text-white text-base md:text-xl md:w-[600px] pt-4 md:pt-7 text-center md:text-left">
        Register now to get the best delivery experience for you and your
        clients in Iraq!
      </div>
      <div className="pt-8 md:pt-10 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="your email"
          className="bg-white rounded-full h-[40px] w-full md:w-[250px] placeholder:pl-2"
        />
        <button className="bg-black text-white rounded-full h-[40px]  w-[360px] md:w-[180px] text-sm md:text-base">
          Register now
        </button>
      </div>
    </div>
  );
};

export default Register;
