const { default: SinglePage } = require("@/Pages/SinglePage/SinglePage");

export const metadata = {
  title: "Single Post || MetaBlog",
  description: "Generate Your Blog Here",
};

const page = () => {
  return (
    <>
      <SinglePage />
    </>
  );
};

export default page;
