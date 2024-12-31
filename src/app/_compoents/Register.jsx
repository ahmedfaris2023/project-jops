const Register = () => {
  return (
    <div className="h-[500px] bg-primary mt-[300px] pl-8 pt-20">
      <div className="text-white text-4xl font-bold">
        What are you waiting for?
      </div>
      <div className="text-white text-xl w-[600px] pt-7">
        Register now to get the best delivery experience for you and your
        clients in Iraq!
      </div>
      <div className="pt-10 flex gap-4">
        <input
          type="text"
          placeholder="your email"
          className="bg-white rounded-full h-[40px] w-[250px] placeholder:pl-2"
        />

        <button className="bg-black  text-white rounded-full h-[40px] w-[120px] ">
          register now
        </button>
      </div>
    </div>
  );
};

export default Register;
