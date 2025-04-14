export default async function Page() {
  const data = await fetch(
    `https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=${"jeffrey_bogart"}`
  );
  const videos = await data.json();
  console.log("VIDEOS: ", videos);
  return (
    <div>
      <main>
        <h1>Videos Page</h1>
      </main>
    </div>
  );
}
