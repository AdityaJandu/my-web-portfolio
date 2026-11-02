import { defineBlogPost } from "../types";

export const vantage = defineBlogPost({
  slug: "vantage",
  title: "Vantage — Market Discovery and Early-Warning Signals for Teams",
  excerpt:
    "Important company risks and market news rarely sit in one place. I'm building Vantage to combine a zero-setup tech and regulatory news reader with an internal signal feed across Salesforce, HubSpot, Gong, Slack, and Linear.",
  category: "Product Engineering",
  tags: [
    "Show HN",
    "Product Engineering",
    "Market Intelligence",
    "B2B SaaS",
    "TypeScript",
  ],
  status: "published",
  publishedAt: "2026-11-02",
  readingTime: 6,
  featured: true,
  coverImage: {
    src: "/blogs/vantage/command-feed.png",
    alt: "Vantage Command Feed showing 1 High-Priority Signal Monitored Today and an SEC 8-K Item 5.02 CFO departure alert",
    caption:
      "The Command Feed: a top summary of P0 Critical and P1 High alerts, followed by the live signal stream.",
  },

  sections: [
    // ------------------------------------------------------------------
    {
      kind: "prose",
      id: "overview",
      title: "What Vantage Is",
      tocLabel: "Overview",
      blocks: [
        {
          type: "paragraph",
          text: "Every team tracks two different kinds of information. Inside the company, updates happen across CRM deals, sales calls, Slack channels, and issue trackers. Outside the company, news breaks across regulatory filings, funding announcements, and tech discussions.",
        },
        {
          type: "paragraph",
          text: "I'm building Vantage so you don't have to check ten places every morning. Right after signing in—even before creating a company workspace—you get a live Market Hub with Hacker News stories, SEC EDGAR filings, and business news. Once you set up a workspace and connect your team's tools, Vantage flags deal slips, project blockers, and leadership changes in one ranked feed.",
        },
        {
          type: "paragraph",
          text: "The web dashboard is live today, and a companion mobile app is being built alongside it using the same backend and route rules.",
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      kind: "prose",
      id: "the-problem",
      title: "Why I Started Building It",
      tocLabel: "The Problem",
      blocks: [
        {
          type: "paragraph",
          text: "Single-tool notifications only know about their own database. That leaves blind spots between tools:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "A deal looks fine in Salesforce or HubSpot, while the customer hasn't replied in Slack for two weeks and a required feature is blocked in Linear.",
            "A watched customer or competitor files an 8-K officer departure with the SEC, and nobody connects it to an open renewal.",
            "Most 'AI workplace' tools try to summarize every routine chat thread into a long paragraph instead of staying quiet until something actually breaks.",
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      kind: "prose",
      id: "philosophy",
      title: "Design Rules",
      tocLabel: "Philosophy",
      blocks: [
        {
          type: "quote",
          text: "Show what changed, link straight to the source record, and don't invent urgency.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Works without AI keys: Hard rules set the priority floor first (for example, an SEC 8-K Item 5.02 officer departure or a 20% deal contraction is always P1 High). If no AI model is configured, the entire app still ingests, ranks, and displays every event.",
            "Useful before setup: You can read, search, filter, and bookmark global news in Market Hub without creating an organization or connecting OAuth tools first.",
            "Honest about missing data: If a news source doesn't provide an event occurrence date or if an upstream feed is slow, the UI says so plainly instead of guessing.",
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      kind: "feature",
      id: "command-feed",
      title: "Command Feed & Morning Briefing",
      tocLabel: "Command Feed",
      image: {
        src: "/blogs/vantage/command-feed.png",
        alt: "Command Feed screen showing the High Alert summary card with 0 P0 Critical, 1 P1 High, and 1 Total Active signal for Puma Biotechnology 8-K Item 5.02",
        caption:
          "The Command Feed rolls up P0 Critical and P1 High counts at the top and lists active signals below with tier filters.",
      },
      tagline:
        "A quick readout of P0 and P1 alerts at the top, with the ranked signal stream underneath.",
      description: [
        "The Command Feed is the main workspace screen. The top card summarizes how many P0 Critical and P1 High signals are active today and lists the top focus items so you don't have to scroll to find urgent problems.",
        "Below the summary card is the Live Signals Stream. You can filter between All Tiers, P0 Critical, P1 High, P2 Medium, and P3/P4 noise, or click 'Seed Executive Demo' on a fresh workspace to test the feed with sample signals.",
      ],
      whyItMatters: [
        "When every update looks the same, important warnings get buried. Separating P0 and P1 alerts from routine updates lets you see in a few seconds whether anything needs action today.",
      ],
      howItWorks: [
        "Each card shows the source (such as sec_edgar or salesforce), the priority badge, how long ago it happened, the headline, and structured metadata tags like the event type and direct source URL.",
      ],
      challenges: [
        {
          title: "Keeping the feed useful when no tools are connected yet",
          detail:
            "New workspaces start empty, so adding a one-click demo seeder and letting watched SEC filings flow into the same stream makes the feed testable right away.",
        },
      ],
      currentWork: [
        "Adding quiet-hours batching so P1 alerts wait for a 07:30 morning digest while P0 alerts notify immediately.",
      ],
      status: "implemented",
    },

    // ------------------------------------------------------------------
    {
      kind: "feature",
      id: "market-hub-discover",
      title: "Market Hub: Global News, Hacker News & SEC Filings",
      tocLabel: "Market Hub",
      image: {
        src: "/blogs/vantage/market-discover.png",
        alt: "Market Hub screen showing Discover, Hacker News, Saved, and Watchlist tabs, source health banner, search bar, source filters, and live Hacker News story cards",
        caption:
          "Market Hub: switch between Discover, Hacker News, Saved, and Watchlist, search headlines, filter by source, and bookmark or hide stories.",
      },
      tagline:
        "Read live Hacker News posts, SEC filings, and business news with search, filters, and personal bookmarks.",
      description: [
        "Market Hub is built as a standalone reader inside Vantage. It has four views: Discover (all sources combined), Hacker News (preserving HN's collections), Saved (your bookmarked stories), and Watchlist (companies your workspace follows).",
        "You can search across headlines and publishers, filter by source (All, SEC EDGAR, News, Hacker News) or topic, and save, mark read, or hide individual stories using the action buttons on each card.",
      ],
      whyItMatters: [
        "You shouldn't have to set up a company CRM just to read industry news or regulatory filings. Making Discover work for any signed-in user gives immediate value while keeping company watchlists one tab away.",
      ],
      howItWorks: [
        "A background worker polls Hacker News, SEC EDGAR, and GDELT under shared database leases and stores public items once for the whole platform. Personal actions—like bookmarking a story or hiding it from your feed—are stored per user so your changes never affect anyone else.",
        "When an upstream provider is slow or rate-limiting, the status banner at the top reports which source is degraded and when it last succeeded rather than hiding the error.",
      ],
      challenges: [
        {
          title: "Upstream rate limits and uneven source speed",
          detail:
            "Public APIs like GDELT and SEC EDGAR have strict rate limits and occasional timeouts. Isolating each stream's cursor and health state means Hacker News keeps updating even when GDELT or SEC is temporarily degraded.",
        },
      ],
      currentWork: [
        "Tuning background poll intervals and expanding topic classification rules for general news.",
      ],
      status: "implemented",
    },

    // ------------------------------------------------------------------
    {
      kind: "feature",
      id: "story-provenance-modal",
      title: "Story Provenance & Lifecycle Timestamps",
      tocLabel: "Story Provenance",
      image: {
        src: "/blogs/vantage/story-detail-modal.png",
        alt: "Story Detail modal for a Hacker News item showing publisher, license policy, Occurred, Published, First Seen timestamps, and links to the outbound article and canonical source",
        caption:
          "Opening a story's details shows its exact ingestion timestamps, content license rule, provider points, and both outbound and canonical links.",
      },
      tagline:
        "Every story card opens a provenance sheet showing exact timestamps, license rules, and source links.",
      description: [
        "Clicking the info icon on any Market Hub card opens its provenance modal. It shows the publisher, the source display license (such as headline_and_own_summary), provider engagement (points, comments, author), and links to both the outbound article and the canonical discussion or filing.",
      ],
      whyItMatters: [
        "News aggregators often blur when an event actually happened versus when a scraper found the link. Separating those dates prevents old stories from looking like breaking news.",
      ],
      howItWorks: [
        "Vantage tracks four separate timestamps for every item: when the underlying event occurred (such as an 8-K event date), when it was published, when the provider first indexed it, and the resulting reporting lag. If a source doesn't state an event date, the modal explicitly says 'Not stated by source' and 'Reporting Lag: Unavailable'.",
      ],
      challenges: [
        {
          title: "Enforcing source display rules in code",
          detail:
            "Different providers allow different things—some allow full summaries while others only allow headlines and outbound links. Attaching the license policy to each record ensures the UI only renders what is permitted.",
        },
      ],
      currentWork: [
        "Adding related-company badges inside the modal when a story matches a watched entity.",
      ],
      status: "implemented",
    },

    // ------------------------------------------------------------------
    {
      kind: "feature",
      id: "signal-detail-drilldown",
      title: "Signal Drill-Down & Priority Calibration",
      tocLabel: "Signal Detail",
      image: {
        src: "/blogs/vantage/signal-detail.png",
        alt: "Signal Detail screen for an SEC 8-K Item 5.02 Officer Change showing Executive Summary, Signal Provenance and Metadata, and Calibrate buttons",
        caption:
          "Signal Detail view: full provenance key-values, source URL, and one-click priority calibration (Critical, Important, FYI, Noise).",
      },
      tagline:
        "Inspect the exact rule and metadata behind a signal, then rate it to tune future alerts.",
      description: [
        "Opening a signal from the Command Feed takes you to its drill-down page. It displays the executive summary, the exact timestamp and source badge, and a grid of provenance metadata—such as the eventType (8K_5_02_OFFICER_CHANGE), marketTopic (LEADERSHIP_AND_GOVERNANCE), sourceUrl, and whether it was an uncertain escalation.",
        "At the bottom, you can calibrate the signal as Critical, Important, FYI, or Noise, or dismiss it from the active feed.",
      ],
      whyItMatters: [
        "Different leaders care about different thresholds. Letting each user rate signals directly on the detail view gives a clean feedback loop without complex settings menus.",
      ],
      howItWorks: [
        "Ratings are stored per user and workspace under database row-level security, and dismissing or rating a signal immediately updates the cached Command Feed and Morning Briefing counts.",
      ],
      challenges: [
        {
          title: "Keeping deterministic floors unbreakable",
          detail:
            "User feedback helps tune borderline alerts, but hard statutory rules (like a CEO or CFO departure in an 8-K filing) keep their minimum priority floor so critical events are never accidentally muted.",
        },
      ],
      currentWork: [
        "Adding a follow-up question box on this screen so you can ask questions against your workspace's synced records.",
      ],
      status: "implemented",
    },

    // ------------------------------------------------------------------
    {
      kind: "feature",
      id: "connected-integrations",
      title: "Zero-Custody SaaS Integrations",
      tocLabel: "Integrations",
      image: {
        src: "/blogs/vantage/integrations-hub.png",
        alt: "Connected Data Integrations page showing cards for Salesforce, HubSpot, Gong, and Slack with record counts for Accounts, Deals, Contacts, Conversations, and Delivery items",
        caption:
          "Connected Data Integrations: connect Salesforce, HubSpot, Gong, Slack, and Linear, and track synced record counts per domain.",
      },
      tagline:
        "Connect Salesforce, HubSpot, Gong, Slack, and Linear without storing raw provider credentials in Vantage.",
      description: [
        "The Integrations screen manages connections to your internal tools: Salesforce and HubSpot for CRM accounts, deals, and contacts; Gong for customer call metadata and transcripts; Slack for team conversations; and Linear for delivery items.",
        "Each provider card shows its current connection status, last sync time, and exact record counts across Accounts, Deals, Contacts, Conversations, and Delivery items, followed by a Synced Records Explorer below.",
      ],
      whyItMatters: [
        "Teams want to verify that their connection is healthy and see exactly how many deals, calls, or issues have been pulled in without digging through backend logs.",
      ],
      howItWorks: [
        "OAuth handshakes are handled through Nango, so Vantage only stores a connection pointer and status rather than raw OAuth tokens. Incoming webhooks are verified, queued in a database outbox, scrubbed for personal contact details and secrets, and normalized into shared tables.",
      ],
      challenges: [
        {
          title: "Handling different CRM schemas and currencies",
          detail:
            "Salesforce and HubSpot structure deals and stages differently. Normalizing them on ingestion—and storing all money values in exact integer cents—keeps downstream rules consistent.",
        },
      ],
      currentWork: [
        "Expanding connection health diagnostics when a provider token expires or hits API rate limits.",
      ],
      status: "implemented",
    },

    // ------------------------------------------------------------------
    {
      kind: "feature",
      id: "workspaces-and-isolation",
      title: "Multi-Tenant Workspaces & Account Isolation",
      tocLabel: "Workspaces",
      image: {
        src: "/blogs/vantage/workspace-account.png",
        alt: "Workspace and Account screen showing the Active Workspace switcher between acme-merco and carlo-marko and the Executive Account details card",
        caption:
          "Workspace & Account settings: switch between organizations in one click or provision a new workspace.",
      },
      tagline:
        " belong to multiple organizations and switch between them cleanly.",
      description: [
        "The Workspace & Account screen lists every organization you belong to (such as acme-merco and carlo-marko), marks which workspace is currently active, and lets you switch workspaces or create a new one in one click.",
      ],
      whyItMatters: [
        "Founders, operators, and advisors often work across more than one company or environment. Switching workspaces has to be fast and must never leak cached data from one organization into another.",
      ],
      howItWorks: [
        "Every workspace query runs inside a PostgreSQL transaction locked to the active organization ID via Row-Level Security (RLS). When you click 'Switch' or 'Sign Out', Vantage cancels in-flight requests and wipes the client query cache before loading the new workspace.",
      ],
      challenges: [
        {
          title: "Combining global tables with tenant-locked tables",
          detail:
            "Public market events live in shared read-only tables, while signals, deals, and watchlists are strictly locked per organization. Enforcing that split at the database role level prevents accidental cross-tenant reads.",
        },
      ],
      currentWork: [
        "Adding workspace-level sensitivity presets and VIP deal thresholds to the settings panel.",
      ],
      status: "implemented",
    },

    // ------------------------------------------------------------------
    {
      kind: "challenges",
      id: "engineering",
      title: "Engineering Decisions & Trade-Offs",
      tocLabel: "Engineering",
      intro:
        "A few practical choices shaped how Vantage is built under the hood.",
      items: [
        {
          title: "Two-stage caching for shared news + private user marks",
          whyHard:
            "Caching the global Discover feed makes page loads fast, but if a cached page includes whether User A bookmarked or hid a story, User B would see User A's personal state.",
          decision:
            "Cache only the public story page in Redis with a validator that rejects any row carrying personal fields, then overlay the signed-in user's bookmarks, read status, and hidden items on read.",
          tradeoff:
            "Requires a small second lookup for the user's personal marks, but guarantees zero cross-user leakage while keeping the heavy feed query cached.",
          status: "implemented",
        },
        {
          title: "Database-enforced Row-Level Security (RLS)",
          whyHard:
            "Relying only on application 'WHERE organization_id = ...' clauses is risky—one forgotten filter in a new query can leak another company's data.",
          decision:
            "Enforce Postgres Row-Level Security policies on every organization and user table, verified by automated live database isolation tests.",
          tradeoff:
            "Every database read has to open inside a scoped helper, which takes more discipline when writing new queries.",
          status: "implemented",
        },
        {
          title: "Deterministic rules first, AI optional",
          whyHard:
            "If an app depends on an LLM API key just to render a feed, local development is painful and provider outages take the whole product down.",
          decision:
            "Compute priority floors and topic tags with deterministic rules first so the entire pipeline works with no AI key configured.",
          tradeoff:
            "Plain rules are less flexible than a model on ambiguous text, so we pair them with optional model enrichment when configured.",
          status: "implemented",
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      kind: "roadmap",
      id: "whats-next",
      title: "What's Next",
      tocLabel: "What's Next",
      intro: "What I'm working on next:",
      items: [
        {
          title: "Mobile app release alongside the web dashboard",
          description:
            "Finish testing the companion mobile app so you can read Discover, check your Morning Briefing, and triage signals from your phone.",
          status: "in-progress",
        },
        {
          title: "Follow-up Q&A on Signal Detail",
          description:
            "Ask questions about a flagged signal ('Why is this renewal at risk?') answered strictly from your workspace's synced CRM, call, and issue records with citations.",
          status: "in-progress",
        },
        {
          title: "Quiet-hours push and 07:30 morning digest",
          description:
            "Hold non-emergency alerts overnight in the user's timezone and deliver a single morning summary at 07:30.",
          status: "planned",
        },
        {
          title: "More statutory and regional market feeds",
          description:
            "Add adapters for Indian corporate disclosures (NSE/BSE filings) and additional tech/market feeds alongside SEC EDGAR, Hacker News, and GDELT.",
          status: "planned",
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      kind: "takeaways",
      id: "takeaways",
      title: "Summary",
      tocLabel: "Summary",
      items: [
        "Command Feed & Morning Briefing: highlights P0 Critical and P1 High signals across your workspace with full source provenance.",
        "Market Hub (Discover): a zero-setup reader for Hacker News, SEC EDGAR filings, and global news with search, filters, and personal bookmarks.",
        "Connected Integrations: zero-custody OAuth for Salesforce, HubSpot, Gong, Slack, and Linear with a live Synced Data Explorer.",
        "Built for verification: every signal and story shows its exact timestamps, source URL, and rule metadata, across web and mobile.",
      ],
    },

    // ------------------------------------------------------------------
    {
      kind: "prose",
      id: "closing",
      title: "Feedback Welcome",
      tocLabel: "Closing",
      blocks: [
        {
          type: "paragraph",
          text: "I'm building Vantage to solve a problem I kept seeing firsthand: important signals getting lost between CRM updates, customer calls, engineering trackers, and outside market news.",
        },
        {
          type: "paragraph",
          text: "If you have feedback on the architecture, the Market Hub reader, or the signal rules, I'd love to hear what you think.",
        },
      ],
    },
  ],
});
