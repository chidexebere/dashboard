const Loading = () => {
  return (
    <div className="mt-20 flex justify-center items-center">
      <div>
        <div
          style={{ borderTopColor: 'transparent' }}
          className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
          role="status"
        ></div>
      </div>
    </div>
  );
};

export default Loading;
