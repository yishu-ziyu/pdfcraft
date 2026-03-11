'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Tool, ToolCategory } from '@/types/tool';
import { Card } from '@/components/ui/Card';
import { ArrowUpRight } from 'lucide-react';
import { getToolIcon } from '@/config/icons';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

export interface ToolCardProps {
  /** Tool data to display */
  tool: Tool;
  /** Current locale for URL generation */
  locale: string;
  /** Optional additional CSS classes */
  className?: string;
  /** Localized content */
  localizedContent?: { title: string; description: string };
}

const categoryTranslationKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate',
  'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf',
  'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair',
  'secure-pdf': 'securePdf',
};

/**
 * ToolCard component displays a single PDF tool with icon, name, and description.
 * Includes hover effects and links to the tool page.
 */
export function ToolCard({ tool, locale, className = '', localizedContent }: ToolCardProps) {
  const t = useTranslations();
  const toolUrl = `/${locale}/tools/${tool.slug}`;

  // Get a human-readable name from the tool ID
  // Use localized title if available, otherwise fallback to formatting the ID
  const toolName = localizedContent?.title || tool.id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Generate a description from features
  // Use localized description (metaDescription) if available
  const description = localizedContent?.description || tool.features
    .slice(0, 3)
    .map(f => f.replace(/-/g, ' '))
    .join(', ');

  const IconComponent = getToolIcon(tool.icon);

  const categoryName = t(`home.categories.${categoryTranslationKeys[tool.category]}`);

  return (
    <Link
      href={toolUrl}
      className={`block focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 rounded-[var(--radius-lg)] group ${className}`}
      data-testid="tool-card"
    >
      <Card
        className="h-full glass-card hover:bg-[hsl(var(--color-card)/0.8)] transition-all duration-[var(--transition-spring)] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden border-transparent group-hover:border-[hsl(var(--color-primary)/0.2)]"
        data-testid="tool-card-container"
      >
        <div className="absolute top-0 right-0 p-3 z-10">
          <FavoriteButton toolId={tool.id} size="sm" />
        </div>
        <div className="absolute top-0 right-10 p-5 opacity-0 group-hover:opacity-100 transition-all duration-[var(--transition-spring)] translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight className="w-5 h-5 text-[hsl(var(--color-primary))]" />
        </div>

        <div className="flex flex-col h-full p-6">
          <div className="flex items-start gap-5 mb-5">
            {/* Tool Icon - Refined with Glassmorphism */}
            <div
              className="flex-shrink-0 w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-[hsl(var(--color-primary)/0.05)] to-[hsl(var(--color-accent)/0.05)] flex items-center justify-center group-hover:scale-110 group-hover:from-[hsl(var(--color-primary)/0.12)] transition-all duration-[var(--transition-spring)] shadow-inner"
              data-testid="tool-card-icon"
              aria-hidden="true"
            >
              <IconComponent className="w-8 h-8 text-[hsl(var(--color-primary))] transition-transform duration-[var(--transition-spring)] group-hover:rotate-3" />
            </div>
          </div>

          {/* Tool Info */}
          <div className="flex-1 min-w-0">
            <h3
              className="text-xl font-extrabold text-[hsl(var(--color-card-foreground))] truncate mb-2.5 group-hover:text-[hsl(var(--color-primary))] transition-colors tracking-tight"
              data-testid="tool-card-name"
            >
              {toolName}
            </h3>
            <p
              className="text-sm text-[hsl(var(--color-muted-foreground))] line-clamp-2 leading-relaxed font-medium opacity-80"
              data-testid="tool-card-description"
            >
              {description}
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-[hsl(var(--color-border)/0.4)] flex items-center justify-between text-[11px] font-bold tracking-widest uppercase">
            <span className="text-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.06)] px-2.5 py-1 rounded-lg">
              {categoryName}
            </span>
            <span className="group-hover:translate-x-1 transition-all duration-[var(--transition-spring)] text-[hsl(var(--color-primary))] flex items-center gap-1 opacity-0 group-hover:opacity-100">
              {t('common.buttons.next') || 'OPEN'}
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default ToolCard;
