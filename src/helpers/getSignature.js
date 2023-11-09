export const getSignature = async (public_id) => {
  const res = await fetch(
    `https://mern-portfolio-yt-backend.vercel.app/api/signature?public_id=${public_id}`
  );
  const { signature } = await res.json();
  return signature;
};
