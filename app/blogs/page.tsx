import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urology Blog | Dr. Tarun Mittal | Best Urologist in Rohtak",
  description: "Expert articles on Endourology, Uro-oncology, Reconstructive Urology, AV-fistula, Incontinence Surgery, and Renal Transplant.",
};

// Blog Data
const blogPosts = [
  {
    id: "1",
    title: "Endourology: Modern Minimally Invasive Kidney Stone Treatment",
    slug: "endourology-minimally-invasive-kidney-stone-treatment",
    excerpt: "Advanced endourology techniques including RIRS, PCNL, and URS for kidney stones. Minimally invasive treatment with faster recovery.",
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
    excerpt: "Comprehensive guide to urological cancer treatment including prostate cancer, bladder cancer, and kidney cancer.",
    content: `Uro-oncology is the specialized field focused on the diagnosis and treatment of cancers affecting the urinary tract.

## Common Urological Cancers

### 1. Prostate Cancer
Second most common cancer in men worldwide.

**Risk Factors:**
- Age > 50 years
- Family history
- High-fat diet

**Treatment Options:**
- Active surveillance
- Radical prostatectomy (robotic/laparoscopic)
- Radiation therapy
- Hormone therapy

### 2. Bladder Cancer
4th most common cancer in men.

**Treatment Options:**
- TURBT (Transurethral Resection)
- BCG immunotherapy
- Radical cystectomy

### 3. Kidney Cancer (Renal Cell Carcinoma)

**Treatment Options:**
- Partial nephrectomy (kidney-sparing)
- Radical nephrectomy

## Advanced Treatment Options
- Robotic Surgery for precise cancer removal
- Laparoscopic Uro-oncology (minimally invasive)

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
    excerpt: "Expert care for urethral stricture, hypospadias, and urinary fistula. High success rate reconstructive surgeries.",
    content: `Reconstructive urology focuses on repairing congenital or acquired defects of the urinary tract.

## Common Conditions Treated

### 1. Urethral Stricture
Narrowing of the urethra due to scar tissue formation.

**Treatment Options:**
| Procedure | Success Rate |
|-----------|--------------|
| DVIU | 60-70% |
| Urethroplasty (Anastomotic) | 90-95% |
| Urethroplasty (Graft) | 85-90% |

### 2. Hypospadias
Congenital condition where the urethral opening is on the underside of the penis.
- **Success Rate:** >90%

### 3. Urethrocutaneous Fistula
Abnormal connection between urethra and skin.

### 4. Vesicovaginal Fistula (VVF)

Dr. Tarun Mittal specializes in complex reconstructive procedures with high success rates.`,
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
    excerpt: "Complete guide to AV fistula creation for hemodialysis. Expert vascular access surgery with 95%+ success rate.",
    content: `An Arteriovenous (AV) fistula is the gold standard vascular access for patients requiring long-term hemodialysis.

## Why AV Fistula is Preferred

| Feature | AV Fistula | Central Line |
|---------|------------|--------------|
| Infection Risk | Lowest | High |
| Longevity | 5-10+ years | Weeks-months |

## Types of AV Fistula

### 1. Radiocephalic Fistula (Brescia-Cimino)
- Most common type
- Connecting radial artery to cephalic vein at wrist

### 2. Brachiocephalic Fistula
- Connecting brachial artery to cephalic vein at elbow

### 3. Brachiobasilic Fistula
- Often requires two-stage procedure

## After Surgery: Maturation
- **Maturation Time:** 4-6 weeks
- **Signs:** Visible "thrill" (vibration), Audible bruit

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
    excerpt: "Advanced surgical options for stress urinary incontinence including TOT, TVT, and artificial urinary sphincter.",
    content: `Urinary incontinence affects millions worldwide, significantly impacting quality of life.

## Types of Urinary Incontinence

### 1. Stress Urinary Incontinence (SUI)
Leakage during coughing, sneezing, or exercise.

### 2. Urge Incontinence (Overactive Bladder)
Sudden, intense urge to urinate.

## Surgical Treatment Options

### Mid-Urethral Sling (TOT/TVT)

| Feature | TOT | TVT |
|---------|-----|-----|
| Success Rate | 85-90% | 85-90% |
| Recovery | 1-2 weeks | 2-3 weeks |

### For Men (Post-Prostatectomy)
- **Artificial Urinary Sphincter (AUS):** 90% success rate
- **Male Sling:** 70-80% success rate

### For Urge Incontinence
- Sacral Neuromodulation (InterStim)
- Intravesical Botox

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
    excerpt: "Complete guide to kidney transplantation including living donor and cadaveric transplant. High success rates.",
    content: `Kidney transplantation is the best treatment option for patients with end-stage renal disease (ESRD).

## Types of Kidney Transplant

### 1. Living Donor Transplant
- Shorter waiting time
- Better graft survival
- Planned surgery

### 2. Deceased Donor (Cadaveric) Transplant
- Waiting time: 2-10 years

## Success Rates

| Time Period | Living Donor | Deceased Donor |
|-------------|--------------|----------------|
| 1 year | 95-98% | 90-95% |
| 5 years | 80-85% | 70-75% |

## The Transplant Surgery

### Donor Surgery (Laparoscopic Nephrectomy)
- 2-3 hour surgery
- 2-3 day hospital stay

### Recipient Surgery
- 3-4 hour surgery
- 5-7 day hospital stay

Dr. Tarun Mittal is part of an experienced renal transplant team.`,
    category: "Renal Transplant Surgery",
    author: "Dr. Tarun Mittal",
    authorRole: "MCH Urology | Renal Transplant Surgeon",
    date: "May 28, 2026",
    readTime: "12 min read",
    color: "from-pink-500 to-rose-500"
  }
];

// Helper function for markdown formatting
function formatExcerpt(text: string) {
  return text.length > 120 ? text.substring(0, 120) + "..." : text;
}

export default async function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            <span className="text-sm font-semibold tracking-wide">EXPERT UROLOGY BLOG</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Urology Insights by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
              Dr. Tarun Mittal
            </span>
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Gold Medalist Urologist sharing expert knowledge on advanced urological treatments
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full cursor-pointer">
                <div className={`h-1.5 bg-gradient-to-r ${post.color}`}></div>
                <div className="p-6">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r ${post.color} mb-3`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{formatExcerpt(post.excerpt)}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.authorRole}</p>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Doctor Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center ring-2 ring-white/30">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-white">Dr. Tarun Mittal</h3>
                <p className="text-blue-100 text-sm">MCH Urology (Gold Medalist) | Ex. Registrar - PGIMS Rohtak & GMCH</p>
                <p className="text-blue-200 text-xs mt-1">15+ Years Experience | 5000+ Successful Surgeries</p>
              </div>
              <div className="flex gap-3">
                <a href="tel:9780890425" className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Now
                </a>
                <a href="/appointment" className="bg-transparent border border-white text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-blue-600 transition flex items-center gap-2">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}