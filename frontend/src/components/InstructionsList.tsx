export default function InstructionsList() {
  return (
    <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
      <li className="mb-2 tracking-[-.01em]">
        Get started by editing{" "}
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
          src/app/page.tsx
        </code>
        .
      </li>
      <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
    </ol>
  );
}
