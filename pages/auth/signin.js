import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

const signin = ({ providers }) => {
  return (
    <div className="flex flex-col space-y-20 pt-24">
      <Image
        src="https://cdn-icons-png.flaticon.com/128/2888/2888407.png"
        width={100}
        height={100}
        alt="Logo"
        className="object-contain"
      />
      {Object.values(providers).map((provider) => (
        <div className="w-full flex justify-center" key={provider.id}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-blue-400 hover:bg-sky-400 py-4 px-6 text-white text-2xl rounded-lg"
          >
            Sign in With {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default signin;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
