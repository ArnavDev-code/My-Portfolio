/**
 * ARNAV NIGAM PORTFOLIO - CORE ENGINE & INTERACTION ARCHITECTURE
 * Inspired by trupti-shriyan.netlify.app forensic storytelling
 */

// --- Comprehensive Project Case Data ---
const CASE_FILES = {
  'upi-fraud': {
    id: 'upi-fraud',
    caseNumber: 'CASE FILE #001 · FINTECH FRAUD',
    title: 'UPI / FinTech Fraud Transaction Detection',
    subtitle: 'Real-Time Risk Scoring & Anomaly Detection on 590K+ Records',
    tag: 'FinTech · Risk Analytics · PostgreSQL · ML',
    question: 'When 590,000+ digital transactions pass through UPI gateways, how do you isolate high-velocity fraud rings in milliseconds without damaging good-user checkout conversion?',
    metrics: [
      { label: 'Transactions Analyzed', value: '590K+', sub: 'High-dimensional IEEE-CIS data' },
      { label: 'Model ROC-AUC', value: '0.92', sub: 'Random Forest classifier' },
      { label: 'Fraud Precision', value: '79%', sub: 'On rare 3.5% prevalence class' },
      { label: 'PostgreSQL Queries', value: '15+', sub: 'Complex CTEs & window joins' }
    ],
    summary: 'Constructed an end-to-end fraud analytics framework modeling real-time digital transaction flows (UPI, Paytm, PhonePe). Conducted extensive data wrangling, missingness engineering on 434 features, engineered transaction velocity patterns, and formulated 15+ business-critical SQL queries to rank risk segments.',
    keyInsights: [
      'Engineered behavioral features: Transaction frequency bursts, device fingerprint switching, and off-hour payment velocity.',
      'Calibrated decision threshold to 0.3, optimizing the precision-recall trade-off to minimize bank financial loss.',
      'Validated findings with SHAP value interpretability to satisfy financial compliance and risk audit standards.'
    ],
    codeSnippet: `-- Sample PostgreSQL Query: High-Risk Velocity & Card Network Segment Ranking
WITH TransactionVelocity AS (
  SELECT 
    user_id,
    transaction_id,
    transaction_amount,
    card_network,
    device_type,
    created_at,
    COUNT(*) OVER(
      PARTITION BY user_id 
      ORDER BY created_at 
      RANGE BETWEEN INTERVAL '15 MINUTE' PRECEDING AND CURRENT ROW
    ) AS tx_count_15m,
    AVG(transaction_amount) OVER(
      PARTITION BY user_id
    ) AS avg_historical_spend
  FROM upi_transactions
)
SELECT 
  card_network,
  device_type,
  COUNT(*) AS total_flagged,
  ROUND(AVG(transaction_amount), 2) AS avg_fraud_ticket
FROM TransactionVelocity
WHERE tx_count_15m >= 4 AND transaction_amount > (2.5 * avg_historical_spend)
GROUP BY card_network, device_type
ORDER BY total_flagged DESC
LIMIT 10;`,
    githubUrl: 'https://github.com/ArnavDev-code/UPI-Fraud-Transaction-Detection',
    demoUrl: 'https://github.com/ArnavDev-code/UPI-Fraud-Transaction-Detection'
  },

  'hifs-fraud': {
    id: 'hifs-fraud',
    caseNumber: 'CASE FILE #002 · EXTREME IMBALANCE',
    title: 'HIFS: Hybrid Imbalanced Fraud Scoring Framework',
    subtitle: 'Credit Card Anomaly Detection under <0.2% Minority Class Prevalence',
    tag: 'Python · Scikit-Learn · Isolation Forest · SMOTE',
    question: 'How do you train reliable fraud detection models when legitimate transactions outnumber fraudulent ones 500-to-1, and standard classifiers predict the majority class 99.8% of the time?',
    metrics: [
      { label: 'Fraud Prevalence', value: '< 0.2%', sub: 'Extreme class imbalance' },
      { label: 'Fraud Recall', value: '91.4%', sub: 'Minimized false negatives' },
      { label: 'Framework', value: 'HIFS', sub: 'Hybrid multi-stage architecture' },
      { label: 'Ensemble', value: 'Soft Voting', sub: 'Tree & boosting models' }
    ],
    summary: 'Engineered the Hybrid Imbalanced Fraud Scoring (HIFS) architecture for banking systems. Combines unsupervised anomaly isolation (Isolation Forest) with targeted synthetic minority oversampling (SMOTE) and a soft-voting ensemble of Random Forests, Gradient Boosting, and Logistic Regression to capture elusive fraud signatures.',
    keyInsights: [
      'Unsupervised Isolation Forest filter eliminates clear non-fraud cases, reducing computational load for downstream models.',
      'Synthetic Minority Over-sampling Technique (SMOTE) balanced boundary decision space without overfitting noisy outliers.',
      'Drastically reduced catastrophic false negatives (missed fraud), safeguarding banking revenue.'
    ],
    codeSnippet: `# HIFS: Pipeline Architecture Snippet
from imblearn.over_sampling import SMOTE
from sklearn.ensemble import IsolationForest, VotingClassifier, RandomForestClassifier
from sklearn.linear_model import LogisticRegression

# 1. Unsupervised Anomaly Scoring
iso_forest = IsolationForest(contamination=0.002, random_state=42)
anomaly_scores = iso_forest.fit_predict(X_train)

# 2. Targeted Synthetic Minority Oversampling
smote = SMOTE(sampling_strategy=0.15, random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

# 3. Soft Voting Ensemble
ensemble = VotingClassifier(
    estimators=[
        ('rf', RandomForestClassifier(n_estimators=100, max_depth=12, class_weight='balanced')),
        ('lr', LogisticRegression(max_iter=1000, C=0.1))
    ],
    voting='soft'
)
ensemble.fit(X_resampled, y_resampled)`,
    githubUrl: 'https://github.com/ArnavDev-code/HIFS-Credit-Card-Fraud-Detection',
    demoUrl: 'https://github.com/ArnavDev-code/HIFS-Credit-Card-Fraud-Detection'
  },

  'sme-lending': {
    id: 'sme-lending',
    caseNumber: 'CASE FILE #003 · INSTITUTIONAL RISK',
    title: 'SME Lending Risk & Default Performance Analytics',
    subtitle: 'Comprehensive Portfolio Risk Analysis Across 2,000,000+ Loans',
    tag: 'Power BI · DAX · Python · Large-scale Data Wrangling',
    question: 'Across a multi-billion dollar portfolio of 2M+ loan originations, which cohorts and risk tiers quietly drive 80% of institutional capital losses?',
    metrics: [
      { label: 'Loans Modeled', value: '2M+', sub: 'LendingClub historical data' },
      { label: 'Data Processed', value: '1.6 GB', sub: 'Compressed multi-table feeds' },
      { label: 'Dashboard', value: 'Power BI', sub: 'Multi-page executive report' },
      { label: 'Risk Dimensions', value: '7 Tiers', sub: 'Sub-grade & interest spread' }
    ],
    summary: 'Extracted, cleaned, and analyzed 2,000,000+ loan records to evaluate credit risk, default drivers, and yield performance. Designed an interactive executive Power BI dashboard with DAX calculations allowing portfolio managers to stress-test default rates against macroeconomic indicators.',
    keyInsights: [
      'Identified sub-grade risk clusters where interest yield failed to compensate for default probability.',
      'Created custom DAX measures for Expected Loss, Weighted Average Maturity, and Vintage Default Rates.',
      'Enabled rapid drill-downs by debt-to-income (DTI) ratio, employment length, and loan purpose.'
    ],
    codeSnippet: `// Power BI DAX: Dynamic Portfolio Expected Loss Measure
Expected Loss = 
SUMX(
    Loans,
    Loans[Loan_Amount] * 
    RELATED(RiskGrades[Historical_Default_Rate]) * 
    (1 - RELATED(RiskGrades[Historical_Recovery_Rate]))
)

// Cumulative Default Rate by Vintage
Cumulative Default % = 
DIVIDE(
    CALCULATE(COUNT(Loans[Loan_ID]), Loans[Loan_Status] = "Charged Off"),
    CALCULATE(COUNT(Loans[Loan_ID]), ALLSELECTED(Loans[Vintage_Year]))
)`,
    githubUrl: 'https://github.com/ArnavDev-code/SME_Lending_Risk_Dashboard',
    demoUrl: 'https://github.com/ArnavDev-code/SME_Lending_Risk_Dashboard'
  },

  'customer-churn': {
    id: 'customer-churn',
    caseNumber: 'CASE FILE #004 · REVENUE PRESERVATION',
    title: 'Customer Churn Analysis & Retention Strategy',
    subtitle: 'Behavioral Segmentation & Machine Learning Churn Predictors',
    tag: 'Python · K-Means · Scikit-Learn · Power BI',
    question: 'Why are newly acquired customers leaving within the first 90 days, and what targeted interventions can prevent \$500K in annual recurring revenue loss?',
    metrics: [
      { label: 'Attributes Analyzed', value: '45+', sub: 'Demographic & usage signals' },
      { label: 'Model Accuracy', value: '82%', sub: '85% precision on churners' },
      { label: 'Customer Clusters', value: '4 Groups', sub: 'Unsupervised K-Means' },
      { label: 'Projected Reduction', value: '20%', sub: 'Targeted monthly churn drop' }
    ],
    summary: 'Analyzed 45+ customer demographic, contract, and usage variables to isolate key churn drivers. Clustered users into 4 behavioral segments via K-Means and trained a predictive classification model delivering 82% accuracy and 85% precision. Formulated 3 high-impact retention initiatives projected to reduce churn by 20%.',
    keyInsights: [
      'Top churn predictors: Month-to-month contracts, lack of online tech support, and fiber optic service friction.',
      'Discovered that customers enrolled in automated payment and tech support had a 3.4x lower attrition rate.',
      'Crafted actionable campaigns: 90-day onboarding nudges and discounted annual contract switches.'
    ],
    codeSnippet: `# K-Means Behavioral Clustering for Churn Segmentation
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(df[['tenure', 'MonthlyCharges', 'TotalCharges']])

kmeans = KMeans(n_clusters=4, init='k-means++', random_state=42)
df['Customer_Cluster'] = kmeans.fit_predict(X_scaled)

# Cluster Persona Aggregation
cluster_profiles = df.groupby('Customer_Cluster').agg({
    'tenure': 'mean',
    'MonthlyCharges': 'mean',
    'Churn': lambda x: (x == 'Yes').mean()
})`,
    githubUrl: 'https://github.com/ArnavDev-code/Customer-Churn-Prediction',
    demoUrl: 'https://github.com/ArnavDev-code/Customer-Churn-Prediction'
  },

  'sql-data-structures': {
    id: 'sql-data-structures',
    caseNumber: 'CASE FILE #005 · QUERY OPTIMIZATION',
    title: 'Advanced SQL & Data Structures Problem Engineering',
    subtitle: 'Complex Relational Analytics, Window Functions & CTEs',
    tag: 'PostgreSQL · MySQL · Database Optimization',
    question: 'How do you query massive normalized relational schemas without degrading production database performance through unoptimized joins and full-table scans?',
    metrics: [
      { label: 'Dialects', value: 'PostgreSQL', sub: 'Also MySQL and SQLite' },
      { label: 'Techniques', value: 'CTEs / Windows', sub: 'Partitioning & rolling metrics' },
      { label: 'Indexing', value: 'B-Tree / Hash', sub: 'Index design & EXPLAIN' },
      { label: 'Focus', value: 'Relational EDA', sub: 'Enterprise reconciliation' }
    ],
    summary: 'A structured repository of advanced relational database problem solutions covering multi-table reconciliation, sliding window computations, consecutive streak identification, recursive queries, and schema optimization patterns.',
    keyInsights: [
      'Hands-on expertise with LEAD, LAG, NTILE, DENSE_RANK, and running cumulative sums.',
      'EXPLAIN ANALYZE query plan inspection to avoid redundant table scans and expensive nested loops.',
      'Architected clean, human-readable recursive Common Table Expressions.'
    ],
    codeSnippet: `-- Finding Consecutive Active Days / Streaks using DENSE_RANK and Date Math
WITH DateRanked AS (
  SELECT 
    user_id,
    login_date,
    ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY login_date) AS rn
  FROM user_logins
  GROUP BY user_id, login_date
),
StreakGroups AS (
  SELECT 
    user_id,
    login_date,
    login_date - CAST(rn || ' days' AS INTERVAL) AS streak_group
  FROM DateRanked
)
SELECT 
  user_id,
  MIN(login_date) AS streak_start,
  MAX(login_date) AS streak_end,
  COUNT(*) AS streak_length_days
FROM StreakGroups
GROUP BY user_id, streak_group
HAVING COUNT(*) >= 5
ORDER BY streak_length_days DESC;`,
    githubUrl: 'https://github.com/ArnavDev-code/Data-Structure-And-Databases',
    demoUrl: 'https://github.com/ArnavDev-code/Data-Structure-And-Databases'
  }
};

// --- Initialization on DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initSignalCanvas();
  initTheme();
  initNavScrollspy();
  initProjectFilters();
  initCaseModal();
  initRecruiterModal();
  initCopyButtons();
});

// --- 1. Interactive Signal Wave Canvas ---
function initSignalCanvas() {
  const canvas = document.getElementById('signal-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let mouse = { x: null, y: null, targetX: null, targetY: null };

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    if (mouse.x === null) {
      mouse.x = width * 0.5;
      mouse.y = height * 0.5;
      mouse.targetX = mouse.x;
      mouse.targetY = mouse.y;
    }
  }

  resize();
  window.addEventListener('resize', resize);

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.targetX = e.clientX - rect.left;
    mouse.targetY = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.targetX = width * 0.5;
    mouse.targetY = height * 0.5;
  });

  let time = 0;
  const waveCount = 5;

  function draw() {
    time += 0.015;
    // Smooth mouse easing
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains('dark');
    const baseColor = isDark ? '249, 115, 22' : '234, 88, 12'; // Signal Orange
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(25, 22, 18, 0.04)';

    // Subtle background radar/grid lines
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Dynamic investigative signal waveforms
    for (let i = 0; i < waveCount; i++) {
      ctx.beginPath();
      const alpha = 0.15 + (i * 0.12);
      ctx.strokeStyle = `rgba(${baseColor}, ${alpha})`;
      ctx.lineWidth = 1.5;

      const frequency = 0.005 + (i * 0.002);
      const phase = time + (i * 1.2);
      const mouseInfluence = (mouse.x / width - 0.5) * 2;

      for (let x = 0; x < width; x += 4) {
        // Distance to cursor
        const dx = x - mouse.x;
        const dist = Math.abs(dx);
        const bump = Math.exp(-(dist * dist) / 12000) * 45;

        const y = (height * 0.5) +
          Math.sin(x * frequency + phase) * (20 + i * 8) +
          Math.cos(x * 0.003 - time * 0.5) * 12 +
          bump * (i % 2 === 0 ? 1 : -0.7) * (mouseInfluence || 1);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    // Cursor data signal pulse
    if (mouse.x !== null) {
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${baseColor})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 16 + Math.sin(time * 4) * 4, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${baseColor}, 0.35)`;
      ctx.stroke();
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  draw();
}

// --- 2. Theme Toggle (Warm Paper vs. Midnight Noir) ---
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('arnav-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('arnav-theme', isDark ? 'dark' : 'light');
    });
  }
}

// --- 3. Active Chapter Scrollspy ---
function initNavScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function checkActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', checkActive);
  checkActive();
}

// --- 4. Project Category Filtering ---
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-orange-500', 'text-white', 'border-orange-500');
        b.classList.add('bg-transparent', 'text-stone-600', 'dark:text-stone-400');
      });
      btn.classList.add('bg-orange-500', 'text-white', 'border-orange-500');
      btn.classList.remove('bg-transparent', 'text-stone-600', 'dark:text-stone-400');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --- 5. Interactive Case File Modal ---
function initCaseModal() {
  const modal = document.getElementById('case-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('case-modal-close');
  const openButtons = document.querySelectorAll('[data-open-case]');

  function openCase(caseId) {
    const caseData = CASE_FILES[caseId];
    if (!caseData) return;

    document.getElementById('modal-case-number').innerText = caseData.caseNumber;
    document.getElementById('modal-title').innerText = caseData.title;
    document.getElementById('modal-subtitle').innerText = caseData.subtitle;
    document.getElementById('modal-tag').innerText = caseData.tag;
    document.getElementById('modal-question').innerText = `"${caseData.question}"`;
    document.getElementById('modal-summary').innerText = caseData.summary;

    // Metrics
    const metricsContainer = document.getElementById('modal-metrics');
    metricsContainer.innerHTML = '';
    caseData.metrics.forEach(m => {
      const mDiv = document.createElement('div');
      mDiv.className = 'p-3 bg-stone-100 dark:bg-stone-800/80 rounded border border-stone-200 dark:border-stone-700';
      mDiv.innerHTML = `
        <div class="text-xl font-bold font-mono text-orange-600 dark:text-orange-400">${m.value}</div>
        <div class="text-xs font-semibold text-stone-800 dark:text-stone-200">${m.label}</div>
        <div class="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">${m.sub}</div>
      `;
      metricsContainer.appendChild(mDiv);
    });

    // Key Insights
    const insightsContainer = document.getElementById('modal-insights');
    insightsContainer.innerHTML = '';
    caseData.keyInsights.forEach(insight => {
      const li = document.createElement('li');
      li.className = 'text-sm text-stone-700 dark:text-stone-300 flex items-start gap-2';
      li.innerHTML = `<span class="text-orange-500 font-mono mt-0.5">↳</span><span>${insight}</span>`;
      insightsContainer.appendChild(li);
    });

    // Code Snippet
    document.getElementById('modal-code').innerText = caseData.codeSnippet;

    // Links
    document.getElementById('modal-github-link').href = caseData.githubUrl;
    document.getElementById('modal-demo-link').href = caseData.demoUrl;

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const caseId = btn.getAttribute('data-open-case');
      openCase(caseId);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

// --- 6. Recruiter Plain Résumé Scannable Modal ---
function initRecruiterModal() {
  const recruiterModal = document.getElementById('recruiter-modal');
  if (!recruiterModal) return;

  const openBtns = document.querySelectorAll('[data-open-recruiter]');
  const closeBtn = document.getElementById('recruiter-modal-close');

  function openRecruiter() {
    recruiterModal.classList.remove('hidden');
    recruiterModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeRecruiter() {
    recruiterModal.classList.add('hidden');
    recruiterModal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openRecruiter();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeRecruiter);

  recruiterModal.addEventListener('click', (e) => {
    if (e.target === recruiterModal) closeRecruiter();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !recruiterModal.classList.contains('hidden')) {
      closeRecruiter();
    }
  });
}

// --- 7. Copy Buttons & Toast Notifications ---
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('toast');

  function showToast(message) {
    if (!toast) return;
    toast.innerText = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 2800);
  }

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      }).catch(() => {
        showToast('Unable to copy automatically.');
      });
    });
  });
}
