const Footer = () => {
  return (
    <div className="min-w-full items-center justify-center pl-20 pb-8">
      <div>
        <p>{new Date().getFullYear()} ByteStack LLC. All rights reserved.</p>
      </div>
      <div>
        <p className="text-gray-400">Terms of Service</p>
        <p className="text-gray-400">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
