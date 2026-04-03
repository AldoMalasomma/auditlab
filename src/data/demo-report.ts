export type Severity = 'high' | 'medium' | 'low';
export type ScoreLabel = 'Privacy' | 'Cookies' | 'Accessibility' | 'UX';
export type ReportVariantKey = 'launch-risk' | 'launch-ready';

export interface CategoryScore {
  label: ScoreLabel;
  score: number;
  summary: string;
  status: string;
}

export interface Finding {
  id: string;
  category: ScoreLabel;
  severity: Severity;
  issue: string;
  whyItMatters: string;
  suggestedAction: string;
}

export type PriorityImpact = 'High' | 'Medium' | 'Low';
export type PriorityEffort = 'Low' | 'Medium' | 'High';

export interface PriorityFix {
  title: string;
  reason: string;
  impact: PriorityImpact;
  effort: PriorityEffort;
  outcome: string;
}

export interface DemoReportData {
  variantKey: ReportVariantKey;
  variantLabel: string;
  domain: string;
  auditDate: string;
  overallScore: number;
  scoreInterpretation: string;
  scoreContext: string;
  statusLabel: string;
  statusSummary: string;
  narrativeHeading: string;
  narrativeBody: string;
  narrativeNote: string;
  comparisonLabel: string;
  comparisonHref: string;
  categoryScores: CategoryScore[];
  findings: Finding[];
  priorityFixes: PriorityFix[];
  finalCta: {
    title: string;
    description: string;
    nextSteps: {
      label: string;
      description: string;
      href: string;
    }[];
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    trustLine: string;
  };
}

export interface ReportToggleLink {
  label: string;
  href: string;
}

const launchRisk: DemoReportData = {
  variantKey: 'launch-risk',
  variantLabel: 'Risk-heavy audit',
  domain: 'clearpathstudio.com',
  auditDate: 'April 3, 2026',
  overallScore: 64,
  scoreInterpretation:
    'This reads as a pre-launch risk case: the consent pattern and privacy placement are likely to trigger the first round of client questions.',
  scoreContext:
    'The score is dragged down by trust presentation more than by visual polish.',
  statusLabel: 'Action required',
  statusSummary:
    'The layout is clean, but the trust story is not yet stable enough for sign-off.',
  narrativeHeading: 'This site still reads as pre-launch risk.',
  narrativeBody:
    'The interface is competent, but the consent flow, privacy placement, and first-pass clarity are pulling in the wrong direction. This is the kind of audit that usually gets a follow-up meeting before it gets approval.',
  narrativeNote:
    'The next sections show why the score is landing here and which fixes change the picture fastest.',
  comparisonLabel: 'See how this compares to a stronger baseline',
  comparisonHref: '/demo-report/launch-ready',
  categoryScores: [
    {
      label: 'Privacy',
      score: 61,
      summary:
        'The disclosures exist, but the most important privacy details sit too far from the first decision point.',
      status: 'At risk',
    },
    {
      label: 'Cookies',
      score: 54,
      summary:
        'The cookie banner works, but the visual balance makes acceptance feel favored rather than neutral.',
      status: 'Priority fix',
    },
    {
      label: 'Accessibility',
      score: 76,
      summary:
        'Structure and reading order are sound, with a few contrast and keyboard issues still visible.',
      status: 'Mostly stable',
    },
    {
      label: 'UX',
      score: 68,
      summary:
        'The page is understandable, but the value proposition takes too long to land for first-time visitors.',
      status: 'Watch',
    },
  ],
  findings: [
    {
      id: 'cookies-consent-balance',
      category: 'Cookies',
      severity: 'high',
      issue: 'The consent flow favors acceptance by design',
      whyItMatters:
        'The primary accept action is more prominent than the decline and settings paths, so the decision feels less neutral than it should.',
      suggestedAction:
        'Match the visual weight of accept and reject controls, then move the explanatory copy into a plain-language disclosure panel.',
    },
    {
      id: 'privacy-third-party-timing',
      category: 'Privacy',
      severity: 'high',
      issue: 'Non-essential scripts begin before consent is clear',
      whyItMatters:
        'Several third-party assets appear to load before the user makes a consent choice, which weakens the privacy story for visitors and reviewers.',
      suggestedAction:
        'Delay non-essential scripts until consent is captured and make the consent state easy to verify in the page flow.',
    },
    {
      id: 'accessibility-contrast-focus',
      category: 'Accessibility',
      severity: 'medium',
      issue: 'Key interactive states need clearer contrast',
      whyItMatters:
        'Most content is readable, but focus states and secondary controls fade too much into the background on the darker sections.',
      suggestedAction:
        'Increase contrast on focus rings and secondary actions so keyboard users can scan and move through the page with confidence.',
    },
    {
      id: 'ux-value-prop-clarity',
      category: 'UX',
      severity: 'medium',
      issue: 'The value proposition lands a beat too late',
      whyItMatters:
        'The interface explains the product well, but a small-business visitor still has to read past the hero before understanding the report value.',
      suggestedAction:
        'Add a short "what you get" line beside the main CTA so the outcome is obvious before the user scrolls.',
    },
    {
      id: 'accessibility-skip-link',
      category: 'Accessibility',
      severity: 'low',
      issue: 'Keyboard users do not get a skip link',
      whyItMatters:
        'The page is already well structured, but there is no obvious shortcut for users who tab through the interface.',
      suggestedAction:
        'Add a visible skip link at the top of the page so keyboard users can jump directly into the report content.',
    },
    {
      id: 'privacy-footer-distance',
      category: 'Privacy',
      severity: 'low',
      issue: 'Privacy details sit too far from the first decision point',
      whyItMatters:
        'The privacy summary is technically present, but it sits farther away from the first conversion decision than ideal.',
      suggestedAction:
        'Bring the privacy summary closer to the primary call to action and use a concise disclosure line near the first interaction.',
    },
  ],
  priorityFixes: [
    {
      title: 'Rebalance the cookie consent controls',
      reason:
        'This is the clearest trust issue in the report and it affects both privacy and UX at the same time.',
      impact: 'High',
      effort: 'Low',
      outcome:
        'The consent flow will feel neutral, easier to understand, and more defensible.',
    },
    {
      title: 'Delay non-essential scripts until consent',
      reason:
        'Deferring third-party behavior makes the privacy story match what the interface claims to support.',
      impact: 'High',
      effort: 'Medium',
      outcome:
        'The site becomes easier to audit and easier to explain to clients.',
    },
    {
      title: 'Strengthen contrast and focus visibility',
      reason:
        'Small accessibility failures become more noticeable when the UI is otherwise polished.',
      impact: 'Medium',
      effort: 'Low',
      outcome:
        'Keyboard navigation and secondary actions become easier to scan on every screen size.',
    },
  ],
  finalCta: {
    title:
      'The report points to a clear order: fix the trust flow first, then tighten the presentation.',
    description:
      'This handoff is meant to stay practical. Pick the next step that matches how your team prefers to work.',
    nextSteps: [
      {
        label: 'Request a manual audit review',
        description:
          'Use the findings as a starting point for a closer pass on the consent and privacy flow.',
        href: '#priority-fixes',
      },
      {
        label: 'Get a structured fix plan',
        description:
          'Turn the report into a short sequence of fixes that your team can ship in order.',
        href: '#priority-fixes',
      },
      {
        label: 'Review critical issues together',
        description:
          'Walk through the high-severity items with the people who will implement the changes.',
        href: '#findings',
      },
    ],
    primaryLabel: 'Start the manual review',
    primaryHref: '#priority-fixes',
    secondaryLabel: 'Export report placeholder',
    secondaryHref: '#top',
    trustLine:
      'No forms, no pressure, and no backend workflow in this demo. The links are placeholders for the next step in the audit flow.',
  },
};

const launchReady: DemoReportData = {
  variantKey: 'launch-ready',
  variantLabel: 'Launch-ready audit',
  domain: 'northline.studio',
  auditDate: 'April 3, 2026',
  overallScore: 91,
  scoreInterpretation:
    'This reads as launch-ready: the remaining work is detail-level polish, not trust repair.',
  scoreContext:
    'The score stays high because the consent flow and privacy presentation already hold together.',
  statusLabel: 'Mostly ready',
  statusSummary:
    'The interface is coherent, the consent flow is balanced, and the remaining work is mostly polish.',
  narrativeHeading: 'This site is stable, with only polish-level gaps left.',
  narrativeBody:
    'The audit reads cleanly: the trust story holds, the content hierarchy is coherent, and the remaining notes are the kind that get fixed during a final polish pass rather than a structural rewrite.',
  narrativeNote:
    'The next sections focus on the few details that still keep the score from feeling complete.',
  comparisonLabel: 'See how this compares to the risk-heavy baseline',
  comparisonHref: '/demo-report',
  categoryScores: [
    {
      label: 'Privacy',
      score: 91,
      summary:
        'Privacy language is easy to find and the disclosure pattern is aligned with the first conversion step.',
      status: 'Strong',
    },
    {
      label: 'Cookies',
      score: 89,
      summary:
        'The cookie controls feel balanced, and the consent path is easier to trust than most audit targets.',
      status: 'Healthy',
    },
    {
      label: 'Accessibility',
      score: 95,
      summary:
        'Structure, contrast, and keyboard flow are solid, with only tiny refinements left to make.',
      status: 'Excellent',
    },
    {
      label: 'UX',
      score: 93,
      summary:
        'The hero and supporting sections communicate the offer quickly and the call to action is clear.',
      status: 'Ready',
    },
  ],
  findings: [
    {
      id: 'ux-proof-point-density',
      category: 'UX',
      severity: 'medium',
      issue: 'The proof points could be slightly tighter above the fold',
      whyItMatters:
        'The page communicates well, but the most persuasive support could be condensed into one stronger line for faster scanning.',
      suggestedAction:
        'Trim one supporting sentence and replace it with a short proof point or result metric near the hero CTA.',
    },
    {
      id: 'accessibility-focus-ring-weight',
      category: 'Accessibility',
      severity: 'low',
      issue:
        'Focus rings could read a little more clearly on the darkest surfaces',
      whyItMatters:
        'Keyboard users can still navigate the page, but the focus state benefits from a little more separation from the background.',
      suggestedAction:
        'Increase the ring thickness or brightness on the most important controls.',
    },
    {
      id: 'privacy-footer-spacing',
      category: 'Privacy',
      severity: 'low',
      issue: 'The privacy summary sits slightly below the ideal fold point',
      whyItMatters:
        'The summary is visible, but it could be brought closer to the first decision point to reduce scanning.',
      suggestedAction:
        'Pull the privacy line closer to the primary CTA and shorten the nearby explanatory copy.',
    },
    {
      id: 'cookies-button-copy',
      category: 'Cookies',
      severity: 'low',
      issue: 'The cookie banner copy is slightly wordy',
      whyItMatters:
        'The consent state is clear, but a leaner explanation would help first-time visitors make a faster decision.',
      suggestedAction:
        'Reduce the helper text to one sentence and keep the action buttons visually balanced.',
    },
  ],
  priorityFixes: [
    {
      title: 'Condense the hero proof points',
      reason:
        'This is the only change that noticeably improves scan speed without touching the overall structure.',
      impact: 'Medium',
      effort: 'Low',
      outcome: 'The page feels sharper and the value proposition lands faster.',
    },
    {
      title: 'Increase focus-ring contrast slightly',
      reason:
        'The page is already accessible, but clearer keyboard states would finish the polish pass.',
      impact: 'Medium',
      effort: 'Low',
      outcome: 'The interface reads more confidently on dark surfaces.',
    },
    {
      title: 'Trim the cookie helper copy',
      reason:
        'A shorter consent message keeps the launch-ready state easy to read for quick audits.',
      impact: 'Low',
      effort: 'Low',
      outcome:
        'The consent block feels cleaner without changing its structure.',
    },
  ],
  finalCta: {
    title:
      'The report is in good shape, so the next step is refinement rather than repair.',
    description:
      'This handoff should help a team polish the last details without turning the audit into a bigger project than it needs to be.',
    nextSteps: [
      {
        label: 'Review the remaining polish items',
        description:
          'Focus on the small adjustments that improve clarity without changing the structure.',
        href: '#priority-fixes',
      },
      {
        label: 'Export a cleanup checklist',
        description:
          'Translate the final notes into a short implementation list for the team.',
        href: '#top',
      },
      {
        label: 'Confirm the launch checklist',
        description:
          'Revisit the low-effort items that keep the site feeling finished.',
        href: '#findings',
      },
    ],
    primaryLabel: 'Review polish items',
    primaryHref: '#priority-fixes',
    secondaryLabel: 'Export report placeholder',
    secondaryHref: '#top',
    trustLine:
      'The report stays static in this demo. The actions simply frame the next conversation after the audit.',
  },
};

export const demoReportVariants: Record<ReportVariantKey, DemoReportData> = {
  'launch-risk': launchRisk,
  'launch-ready': launchReady,
};

export const demoReport = demoReportVariants['launch-risk'];

export const demoReportToggleLinks: Record<ReportVariantKey, ReportToggleLink> =
  {
    'launch-risk': {
      label: 'Risk-heavy example',
      href: '/demo-report',
    },
    'launch-ready': {
      label: 'Launch-ready example',
      href: '/demo-report/launch-ready',
    },
  };

export function getDemoReportVariant(
  variant: string | undefined,
): DemoReportData {
  if (variant === 'launch-ready') {
    return demoReportVariants['launch-ready'];
  }

  return demoReportVariants['launch-risk'];
}
