import { Link } from "@tanstack/react-router";
export default function NotFoundPage() {
  return (
    <div className="not-found h-screen flex flex-col justify-center items-center">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link className="text-blue-500 hover:underline hover:text-2xl cursor-pointer text-xl"  to="/">Return to Home</Link>
    </div>
  );
}