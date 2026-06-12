import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

// Blog Data (same as above)
const blogPosts = [
  {
    id: "1",
    title: "Endourology: Modern Minimally Invasive Kidney Stone Treatment",
    slug: "endourology-minimally-invasive-kidney-stone-treatment",
    excerpt: "Advanced endourology techniques including RIRS, PCNL, and URS for kidney stones.",
    content: `Endourology is the branch of urology that deals with minimally invasive surgical procedures to treat diseases of the urinary tract.

## Common Endourological Procedures

### 1. Ureteroscopy (URS)
A thin flexible scope is passed through the urethra and bladder into the ureter to visualize and treat stones.
- **Best for:** Stones in the ureter
- **Success rate:** 90-95%
- **Recovery time:** 1-3 days

### 2. Retrograde Intrarenal Surgery (RIRS)
A flexible ureteroscope is passed up to the kidney to treat stones using Holmium laser.
- **Best for:** Kidney stones up to 2cm
- **Success rate:** 85-90%

### 3. Percutaneous Nephrolithotomy (PCNL)
A small incision (about 1cm) is made in the back to access the kidney directly.
- **Best for:** Large kidney stones (>2cm)
- **Success rate:** 90-95%

## Advantages of Endourology
- No large incisions = Minimal scarring
- Shorter hospital stay (1-3 days)
- Faster recovery
- Less pain

Dr. Tarun Mittal is a Gold Medalist in MCH Urology with over 2000+ successful stone surgeries.`,
    category: "Endourology",
    author: "Dr. Tarun Mittal",
    authorRole: "MCH Urology (Gold Medalist)",
    date: "June 10, 2026",
    readTime: "8 min read",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "2",
    title: "Uro-oncology: Advanced Cancer Care for Prostate, Bladder & Kidney",
    slug: "uro-oncology-prostate-bladder-kidney-cancer-treatment",
    excerpt: "Comprehensive guide to urological cancer treatment.",
    content: `Uro-oncology is the specialized field focused on the diagnosis and treatment of cancers affecting the urinary tract.

## Common Urological Cancers

### 1. Prostate Cancer
Second most common cancer in men worldwide.

**Treatment Options:**
- Active surveillance
- Radical prostatectomy (robotic/laparoscopic)
- Radiation therapy

### 2. Bladder Cancer
4th most common cancer in men.

**Treatment Options:**
- TURBT (Transurethral Resection)
- BCG immunotherapy

### 3. Kidney Cancer

**Treatment Options:**
- Partial nephrectomy (kidney-sparing)
- Radical nephrectomy

Dr. Tarun Mittal is a Gold Medalist with 15+ years experience in cancer surgeries.`,
    category: "Uro-oncology",
    author: "Dr. Tarun Mittal",
    authorRole: "MCH Urology | Uro-oncology Specialist",
    date: "June 8, 2026",
    readTime: "10 min read",
    color: "from-red-500 to-rose-500"
  },
  {
    id: "3",
    title: "Reconstructive Urology: Restoring Urinary Function and Anatomy",
    slug: "reconstructive-urology-urethral-stricture-hypospadias-repair",
    excerpt: "Expert care for urethral stricture, hypospadias, and urinary fistula.",
    content: `Reconstructive urology focuses on repairing congenital or acquired defects of the urinary tract.

## Common Conditions Treated

### 1. Urethral Stricture
Narrowing of the urethra due to scar tissue formation.

**Treatment Options:**
- DVIU: 60-70% success rate
- Urethroplasty (Anastomotic): 90-95% success rate
- Urethroplasty (Graft): 85-90% success rate

### 2. Hypospadias
Congenital condition where the urethral opening is on the underside of the penis.
- Success Rate: >90%

### 3. Vesicovaginal Fistula (VVF)

Dr. Tarun Mittal specializes in complex reconstructive procedures.`,
    category: "Reconstructive Urology",
    author: "Dr. Tarun Mittal",
    authorRole: "MCH Urology | Reconstructive Surgeon",
    date: "June 5, 2026",
    readTime: "9 min read",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: "4",
    title: "AV Fistula Surgery: Lifeline for Dialysis Patients",
    slug: "av-fistula-surgery-dialysis-access-hemodialysis",
    excerpt: "Complete guide to AV fistula creation for hemodialysis.",
    content: `An Arteriovenous (AV) fistula is the gold standard vascular access for patients requiring long-term hemodialysis.

## Types of AV Fistula

### Radiocephalic Fistula (Brescia-Cimino)
- Most common type
- Connecting radial artery to cephalic vein at wrist

### Brachiocephalic Fistula
- Connecting brachial artery to cephalic vein at elbow

## After Surgery: Maturation
- Maturation Time: 4-6 weeks
- Signs: Visible "thrill" (vibration), Audible bruit

Dr. Tarun Mittal has a 95%+ success rate in AV fistula surgery.`,
    category: "AV-fistula Surgery",
    author: "Dr. Tarun Mittal",
    authorRole: "MCH Urology | Vascular Access Surgeon",
    date: "June 3, 2026",
    readTime: "7 min read",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "5",
    title: "Incontinence Surgery: Regaining Bladder Control",
    slug: "incontinence-surgery-stress-urinary-incontinence-treatment",
    excerpt: "Advanced surgical options for stress urinary incontinence.",
    content: `Urinary incontinence affects millions worldwide.

## Types of Urinary Incontinence

### Stress Urinary Incontinence (SUI)
Leakage during coughing, sneezing, or exercise.

## Surgical Treatment Options

### Mid-Urethral Sling (TOT/TVT)
- Success Rate: 85-90%
- Recovery: 1-2 weeks

### For Men (Post-Prostatectomy)
- Artificial Urinary Sphincter (AUS): 90% success rate

Dr. Tarun Mittal is an expert in TOT/TVT procedures.`,
    category: "Incontinence Surgery",
    author: "Dr. Tarun Mittal",
    authorRole: "MCH Urology | Female Urology Specialist",
    date: "June 1, 2026",
    readTime: "8 min read",
    color: "from-orange-500 to-amber-500"
  },
  {
    id: "6",
    title: "Renal Transplant Surgery: A New Lease on Life",
    slug: "renal-transplant-surgery-kidney-transplant-guide",
    excerpt: "Complete guide to kidney transplantation.",
    content: `Kidney transplantation is the best treatment option for patients with end-stage renal disease (ESRD).

## Types of Kidney Transplant

### Living Donor Transplant
- Shorter waiting time
- Better graft survival

### Deceased Donor (Cadaveric) Transplant
- Waiting time: 2-10 years

## Success Rates
- Living Donor 1 year: 95-98%
- Deceased Donor 1 year: 90-95%

Dr. Tarun Mittal is part of an experienced renal transplant team.`,
    category: "Renal Transplant Surgery",
    author: "Dr. Tarun Mittal",
    authorRole: "MCH Urology | Renal Transplant Surgeon",
    date: "May 28, 2026",
    readTime: "12 min read",
    color: "from-pink-500 to-rose-500"
  }
];

function getBlogBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

function formatContent(content: string) {
  let html = content;
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">$1</h2>');
  html = html.replace(/^- (.*$)/gm, '<li class="ml-4 mb-1 text-gray-700">$1</li>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
  html = html.replace(/\n(?!<h|<li|<ul)(.*$)/gm, '<p class="text-gray-700 leading-relaxed mb-4">$1</p>');
  
  // Handle tables
  html = html.replace(/\|(.+)\|/gm, (match) => {
    const cells = match.split('|').filter(c => c.trim() && !c.includes('---'));
    if (cells.length === 0) return '';
    return `<tr>${cells.map(c => `<th class="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold">${c.trim()}</th>`).join('')}</tr>`;
  });
  html = html.replace(/(<th>.*<\/th>)/g, '<tr>$1</tr>');
  html = html.replace(/(<tr>.*<\/tr>)+/g, '<table class="min-w-full border border-gray-300 rounded-lg mb-6">$&</table>');
  
  return html;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero */}
      <div className={`bg-gradient-to-r ${post.color} text-white py-12 md:py-16`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <span>{post.author}</span>
            </div>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
        </article>

        {/* Author */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
              <p className="text-blue-600 font-medium">{post.authorRole}</p>
              <p className="text-gray-600 text-sm mt-1">Gold Medalist in MCH Urology with over 15 years of experience.</p>
            </div>
            <a href="/appointment" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition">
              Book Consultation
            </a>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}