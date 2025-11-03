import { useState, useEffect } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({ title, description, subDescription, href, image, tags }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [showPreview, setShowPreview] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll events to hide preview during scroll
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      setShowPreview(false);

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Set scrolling to false after scroll ends
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleMouseMove = (e) => {
    // Only update position if not scrolling and mouse coordinates are valid
    if (!isScrolling && e.clientX > 0 && e.clientY > 0) {
      setPreviewPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    }
  };

  const handleMouseEnter = () => {
    if (!isHidden && !isScrolling) {
      setShowPreview(true);
    }
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More{" "}
          <img
            src="/Assets/arrow-right.svg"
            alt="arrow right icon"
            className="w-5"
          />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Image Preview on Hover */}
      {showPreview &&
        !isHidden &&
        !isScrolling &&
        previewPosition.x > 0 &&
        previewPosition.y > 0 && (
          <div
            className="fixed pointer-events-none z-40"
            style={{
              top: `${previewPosition.y}px`,
              left: `${previewPosition.x}px`,
            }}
          >
            <img
              src={image}
              alt={`${title} preview`}
              className="w-48 h-32 object-cover rounded-lg shadow-lg border border-white/10 transition-all duration-100 ease-out"
            />
          </div>
        )}

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </div>
  );
};

export default Project;
