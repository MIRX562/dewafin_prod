const CopyRights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p className="text-xs text-center md:text-sm text-gray-500 dark:text-gray-400">
        DewaPedia © {currentYear} <a href="mirxsolutions.com">MIRX</a>
      </p>
    </div>
  );
};

export default CopyRights;