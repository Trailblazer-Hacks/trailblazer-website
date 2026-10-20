/** Original pixel illustration redrawn from the supplied rocket's visual language. */
export function Rocket({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 380"
      fill="none"
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      <path d="M90 270h40v20h20v40h-20v30h-20v20H90v-40H70v-40h20z" fill="#F2AC20" />
      <path d="M100 270h20v35h10v25h-20v25h-10v-35H90v-25h10z" fill="#FFE26A" />
      <path d="M100 275h20v30h-10v25h-10z" fill="#FFF5C6" />
      <path
        d="M80 170H60v20H40v20H20v70h40v-20h20zm60 0h20v20h20v20h20v70h-40v-20h-20z"
        fill="#281B26"
      />
      <path
        d="M60 200H50v20H35v40h20v-20h25v-40zm100 0h10v20h15v40h-20v-20h-25v-40z"
        fill="#A22D47"
      />
      <path
        d="M100 10h20v20h20v20h20v40h15v150h-15v30H60v-30H45V90h15V50h20V30h20z"
        fill="#281B26"
      />
      <path d="M100 30h20v20h20v40h20v140h-15v25H75v-25H60V90h20V50h20z" fill="#FFF8EA" />
      <path d="M130 80h15v20h15v130h-15v25h-30V100h15z" fill="#D4D1DC" />
      <path d="M100 30h20v20h20v30H80V50h20z" fill="#9F2942" />
      <path d="M120 50h20v30h-20z" fill="#751C32" />
      <path d="M80 120h60v15h15v55h-15v15H80v-15H65v-55h15z" fill="#E9AD25" />
      <path d="M85 135h50v15h5v35h-5v5H85v-5H80v-35h5z" fill="#FFF0B9" />
      <path d="M90 148h8v23h-8zm32 0h8v23h-8zm-19 28h15v8h-15z" fill="#281B26" />
      <path d="M80 170h10v8H80zm50 0h10v8h-10z" fill="#ED7B83" />
      <path d="M60 220h100v15H60z" fill="#E9AD25" />
      <path d="M75 250h70v20H75z" fill="#555160" />
      <path d="M85 270h50v15H85z" fill="#281B26" />
      <path d="M145 235h15v15h-15z" fill="#B58423" />
    </svg>
  );
}

export function Spark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M13 0h6v10h3v3h10v6H22v3h-3v10h-6V22h-3v-3H0v-6h10v-3h3z" fill="currentColor" />
    </svg>
  );
}
