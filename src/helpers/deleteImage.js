export const deleteImage = async (public_id, signature) => {
  const deleted = await fetch(
    "https://api.cloudinary.com/v1_1/dmljeib0i/image/destroy",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public_id: public_id,
        api_key: "966342342222682",
        api_secret: "EaTN0vHUnXjKBBMGZiNf5XyyTEM",
        signature: signature,
        timestamp: Math.floor((new Date().getTime() + 31536000000) / 1000),
      }),
    }
  );
  const data = await deleted.json();
  return data;
};
