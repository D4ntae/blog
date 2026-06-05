import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface Props {
  pathname: string;
}

const links = [
  { href: '/blog',     label: 'blog'     },
  { href: '/research', label: 'research' },
  { href: '/notes',    label: 'notes'    },
  { href: '/projects', label: 'projects' },
];

export function MobileNav({ pathname }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="flex items-center justify-center w-8 h-8 text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="bg-[var(--bg)] border-r border-[var(--border)] p-0"
      >
        <div className="flex flex-col h-full px-7 py-9">
          <a
            href="/"
            className="font-serif text-[26px] font-light text-[var(--text)] tracking-tight mb-2"
          >
            DD<span className="text-[var(--amber)]">.</span>
          </a>
          <p className="text-[11px] text-[var(--text-3)] tracking-[0.04em] mb-10">
            security researcher &amp; builder
          </p>

          <nav className="flex flex-col gap-0.5 flex-1">
            {links.map(link => {
              const active = pathname.startsWith(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2.5 px-2.5 py-2 text-[12px] tracking-[0.08em] uppercase transition-all ${
                    active
                      ? 'text-[var(--amber)]'
                      : 'text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--surface)]'
                  }`}
                >
                  {active && (
                    <span className="w-1 h-1 bg-[var(--amber)] inline-block flex-shrink-0" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="border-t border-[var(--border)] pt-5 mt-5">
            <div className="flex flex-col gap-2 mb-4">
              <a
                href="https://github.com/dankodelimar"
                className="text-[11px] text-[var(--text-3)] tracking-[0.06em] hover:text-[var(--amber)] transition-colors"
                target="_blank"
                rel="noopener"
              >
                github ↗
              </a>
              <a
                href="mailto:danko.delimar@gmail.com"
                className="text-[11px] text-[var(--text-3)] tracking-[0.06em] hover:text-[var(--amber)] transition-colors"
              >
                email
              </a>
            </div>
            <p className="text-[10px] text-[var(--text-3)] tracking-[0.04em]">
              © {new Date().getFullYear()} Danko Delimar
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
