/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export interface IImage {
  src: string | Blob | undefined;
  alt: string | undefined;
  href: string | undefined;
  title: string | undefined;
}

export function Image(props: IImage) {
  return (
    <div className="w-full max-w-full h-[300px] sm:h-[400px] md:h-[500px] mx-auto pt-4 md:pt-10 px-4">
      <img className="w-full h-full object-contain" {...props} />
    </div>
  );
}
