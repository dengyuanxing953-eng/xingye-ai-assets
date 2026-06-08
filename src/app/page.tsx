"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "首页", href: "#home" },
  { label: "GEO案例", href: "#cases" },
  { label: "Agent工作流", href: "#workflow" },
  { label: "学习资产", href: "#assets" },
  { label: "关于我", href: "#about" },
];

const CATEGORIES = [
  {
    num: "01",
    title: "GEO 实战案例",
    desc: "生成式引擎优化的真实落地案例，从策略到执行到复盘。已完成腾讯元宝方向，其他平台逐步适配中。",
    tags: ["GEO", "内容优化", "AI搜索"],
  },
  {
    num: "02",
    title: "本地生活 AI 获客",
    desc: "用 AI 为本地商家做内容营销、搜索优化、自动化获客，低成本撬动精准流量。",
    tags: ["本地生活", "获客", "内容营销"],
  },
  {
    num: "03",
    title: "Agent / OPC 工作流",
    desc: "Owner-CEO-Worker 三层 Agent 架构，实现全自动桌面接管、任务分发与执行调度。",
    tags: ["Agent", "自动化", "OPC"],
  },
  {
    num: "04",
    title: "AI 学习笔记与 SOP",
    desc: "备考、技能学习、工具上手的结构化笔记和标准流程，把一次性学习变成可复用资产。",
    tags: ["SOP", "学习笔记", "知识管理"],
  },
];

const PROJECTS = [
  {
    title: "MMLD-Yuanbao Skill",
    subtitle: "腾讯元宝 GEO 内容生成 Skill",
    status: "已开源",
    result: "围绕腾讯元宝检索机制，为本地餐饮店生成公众号文章、腾讯新闻稿与元数据包，帮助内容更容易被 AI 检索、引用和展示。",
    whatIDid: [
      "梳理腾讯元宝检索机制与内容入口",
      "基于 GEO 三大策略设计 Skill 执行流程",
      "输出公众号文章、腾讯新闻稿和 metadata 结构",
      "适配 Hermes / OpenClaw / Claude Code 等 Agent 使用方式",
    ],
    tags: ["GEO", "腾讯元宝", "Agent Skill", "本地餐饮"],
    githubUrl: "https://github.com/dengyuanxing953-eng/mmld-yuanbao-skill",
  },
  {
    title: "OPC：Owner-CEO-Worker Agent 架构",
    status: "建设中",
    result: "三层 Agent 调度系统，实现全自动桌面接管",
    whatIDid: [
      "设计三层 Agent 调度架构",
      "小九总指挥、CC 文官、龙虾武将分工",
      "飞书群消息自动分发与执行",
    ],
    tags: ["Agent", "自动化", "架构设计"],
    githubUrl: undefined,
  },
  {
    title: "AI 学习笔记系统",
    status: "建设中",
    result: "84 天冲刺计划，AI 辅助刷题与知识图谱构建",
    whatIDid: [
      "制定高数 + 计算机基础学习计划",
      "AI 辅助错题分析与知识点归纳",
      "笔记结构化沉淀为可检索资产",
    ],
    tags: ["学习", "备考", "知识管理"],
    githubUrl: undefined,
  },
  {
    title: "微信聊天记录导出教程",
    status: "已上线",
    result: "Apple 风格教程页，教用户导出并分析微信聊天记录",
    whatIDid: [
      "梳理微信 PC 数据解密流程",
      "设计分步式教程页面",
      "覆盖 wx_key + WeChatDataAnalysis 工具链",
    ],
    tags: ["教程", "微信", "数据分析"],
    link: "/wechat-tutorial.html",
  },
];

const METHODOLOGY = [
  {
    step: "01",
    title: "观察真实问题",
    desc: "从真实业务、学习卡点和工具使用障碍中发现需求。",
  },
  {
    step: "02",
    title: "拆解业务流程",
    desc: "把模糊问题拆成目标、路径、步骤、交付物。",
  },
  {
    step: "03",
    title: "搭建 AI 工作流",
    desc: "用 GPT、Claude、Hermes、OpenClaw 等工具形成执行链路。",
  },
  {
    step: "04",
    title: "复盘沉淀资产",
    desc: "把一次性经验整理成案例、SOP、模板和可复用系统。",
  },
];

const STATS = [
  { value: "3", label: "真实业务案例" },
  { value: "5", label: "SOP 标准流程" },
  { value: "12", label: "学习笔记资产" },
  { value: "2", label: "Agent 工作流" },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-white text-zinc-900">
      {/* ════════════ NAV ════════════ */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="inline-block h-4 w-4 rounded bg-gradient-to-br from-blue-500 to-purple-500" />
            星野 AI 资产库
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-[13px] text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md text-zinc-500 hover:bg-zinc-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="菜单"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-zinc-200/60 bg-white/90 px-6 pb-4 pt-2 backdrop-blur-xl md:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm text-zinc-600 hover:bg-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section id="home" className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* 左侧文案 */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[12px] text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              持续构建中
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl md:leading-[1.15]">
              把 AI 实战经验
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                沉淀成可复用的个人资产
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-500">
              从腾讯元宝 GEO Skill 开始，持续沉淀本地生活 AI 获客、Agent 工作流和学习型 SOP 资产。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cases"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-900 px-5 text-[13px] font-medium text-white transition hover:bg-zinc-800"
              >
                查看实战案例
              </a>
              <a
                href="#workflow"
                className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-200 px-5 text-[13px] font-medium text-zinc-600 transition hover:bg-zinc-50"
              >
                了解工作流 →
              </a>
            </div>
          </div>

          {/* 右侧 Dashboard 卡片 */}
          <div className="w-full max-w-sm shrink-0">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[13px] font-medium text-zinc-900">
                  AI Asset Dashboard
                </span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
                  Live
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "已开源资产", value: "01" },
                  { label: "建设中项目", value: "02" },
                  { label: "SOP / Skill 文档", value: "01" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50/50 px-3.5 py-2.5"
                  >
                    <span className="text-[13px] text-zinc-600">
                      {item.label}
                    </span>
                    <span className="text-[15px] font-semibold tabular-nums text-zinc-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50/50 px-3.5 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[12px] text-zinc-500">
                  当前状态：持续构建中
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 数据指标条 ════════════ */}
      <section className="border-y border-zinc-100 bg-zinc-50/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 py-6"
            >
              <span className="text-2xl font-semibold tabular-nums text-zinc-900 md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-[12px] text-zinc-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ 资产分类 ════════════ */}
      <section id="assets" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-[12px] font-medium uppercase tracking-widest text-zinc-400">
            资产分类
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            四大核心板块
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.num}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-transparent hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-purple-50/50 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.15)]"
            >
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-300 group-hover:text-blue-400">
                {cat.num}
              </div>
              <h3 className="text-[15px] font-medium">{cat.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">
                {cat.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] text-zinc-500 group-hover:bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ 精选项目 ════════════ */}
      <section id="cases" className="border-t border-zinc-100 bg-zinc-50/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-12">
            <p className="text-[12px] font-medium uppercase tracking-widest text-zinc-400">
              精选项目
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              实战沉淀
            </h2>
            <p className="mt-3 text-[14px] text-zinc-500">
              目前已开源 MMLD-Yuanbao Skill 和微信教程页，其他项目正在整理中。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-medium leading-snug">
                    {proj.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      proj.status === "已开源"
                        ? "bg-emerald-50 text-emerald-600"
                        : proj.status === "已上线"
                        ? "bg-emerald-50 text-emerald-600"
                        : proj.status === "建设中"
                        ? "bg-zinc-100 text-zinc-500"
                        : proj.status === "实战中"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>
                <p className="mt-3 text-[13px] font-medium text-zinc-700">
                  {proj.result}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {proj.whatIDid.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[12px] text-zinc-500"
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-zinc-300" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-3 pt-4">
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-medium text-blue-600 transition hover:text-blue-800"
                    >
                      查看教程 →
                    </a>
                  ) : (
                    <button className="text-[13px] font-medium text-zinc-400 transition hover:text-zinc-900">
                      查看详情 →
                    </button>
                  )}
                  {proj.githubUrl ? (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-medium text-zinc-400 transition hover:text-zinc-900"
                    >
                      GitHub →
                    </a>
                  ) : !proj.link ? (
                    <span className="text-[13px] font-medium text-zinc-300 cursor-not-allowed">
                      整理中
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 方法论 ════════════ */}
      <section id="workflow" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-[12px] font-medium uppercase tracking-widest text-zinc-400">
            方法论
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            从问题到资产
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-200 via-purple-200 to-transparent md:left-[23px] md:block" />
          <div className="grid gap-8 md:grid-cols-4">
            {METHODOLOGY.map((m) => (
              <div
                key={m.step}
                className="relative flex gap-4 md:flex-col md:gap-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-[13px] font-semibold text-zinc-400">
                  {m.step}
                </div>
                <div className="md:mt-4">
                  <h3 className="text-[15px] font-medium">{m.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-500">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 关于我 ════════════ */}
      <section id="about" className="border-t border-zinc-100 bg-zinc-50/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-12">
            <p className="text-[12px] font-medium uppercase tracking-widest text-zinc-400">
              关于我
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              星野
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-[15px] leading-relaxed text-zinc-600">
                我不是单纯整理资料，而是在真实项目中验证 AI 的落地方式。
                每一个工具、每一条 SOP、每一篇笔记，都来自实战而非理论。
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
                相信最好的学习方式是动手，最好的动手要沉淀成资产。
              </p>
            </div>
            <div>
              <p className="mb-4 text-[13px] font-medium text-zinc-900">
                目前关注三个方向：
              </p>
              <div className="space-y-3">
                {[
                  "GEO 与本地生活 AI 获客",
                  "Agent / OPC 自动化工作流",
                  "AI 学习笔记与知识资产管理",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[14px] text-zinc-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center md:p-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            一起探索 AI 的真实落地
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-zinc-500">
            如果你也想把 AI 用到真实业务里，可以联系我一起探索。
            不卖课、不画饼，只聊实战。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#assets"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-900 px-5 text-[13px] font-medium text-white transition hover:bg-zinc-800"
            >
              查看我的资产库
            </a>
            <a
              href="#about"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 text-[13px] font-medium text-zinc-600 transition hover:bg-zinc-50"
            >
              联系我交流
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="border-t border-zinc-100 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-[12px] text-zinc-400 sm:flex-row">
          <span>© 2026 星野 AI 资产库</span>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-zinc-600">
              GitHub
            </a>
            <a href="#" className="transition hover:text-zinc-600">
              Twitter
            </a>
            <a href="#" className="transition hover:text-zinc-600">
              微信
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
