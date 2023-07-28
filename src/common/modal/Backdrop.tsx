function Backdrop({
  onClose,
  children,
  open,
}: {
  onClose: () => void;
  children: React.ReactNode;
  open?: boolean;
}) {
  return (
    <div
      onClick={onClose}
      className={`w-screen h-screen transition-all duration-400 fixed top-0 left-0 right-0 bottom-0 overlay bg-[#00292dbf] ${
        open ? "opacity-100 z-40" : "opacity-0 -z-50"
      }`}
    >
      {children}
    </div>
  );
}
export default Backdrop;
