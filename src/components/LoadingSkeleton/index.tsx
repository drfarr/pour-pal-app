import "./styles.css";

export default function LoadingSkeleton({
  variant = "third",
}: {
  variant?: "third" | "half";
}) {
  const isHalf = variant === "half";
  return (
    <div className="loading-skeleton">
      {[...Array(isHalf ? 2 : 10)].map((_, idx) => (
        <div
          className={`skeleton ${isHalf ? "half" : "third"}`}
          key={`skeleton-${idx}`}
        />
      ))}
    </div>
  );
}
