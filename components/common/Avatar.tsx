interface AvatarInterface {
  name: string;
  size?: "small" | "big";
}
const Avatar: React.FC<AvatarInterface> = ({ name, size = "small" }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full  ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
};
export default Avatar;
