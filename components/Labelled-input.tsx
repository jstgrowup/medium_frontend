import { LabelledInterface } from "@/utils/types.ts/Global-types";

const LabelledInput = ({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInterface) => {
  return (
    <div>
      <label className="block mb-2 text-md font-semibold text-black">
        {label}
      </label>
      <input
        type={type ?? "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-3"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default LabelledInput;
