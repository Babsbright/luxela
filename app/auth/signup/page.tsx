import Button from "@/app/components/Button/button";
import Input from "@/app/components/Input/input";

export default function SignUp() {
  return (
    <div className="font-sans flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="text-center">
        <h2 className="font-semibold capitalize text-base">personal details</h2>
        <p className="max-w-md mt-3 mx-auto text-gray-400 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ratione
          consequuntur ut laborum inventore sequi assumenda paria
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full max-w-[600px]">
        <form className="space-y-6" action="#" method="POST">
          <Input
            label="First Name"
            name="firstname"
            value=""
            type="text"
            placeholder="Enter your first name"
          />

          <Input
            label="Last Name"
            name="lastname"
            type="text"
            value=""
            placeholder="Enter your last name"
          />

          <Button>Proceed</Button>
        </form>
      </div>
    </div>
  );
}
