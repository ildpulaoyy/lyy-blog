import { withBase } from "./lib/urls";
export const siteInfo = {
  title: "青椒的小站",
  description: "来自青椒星球的一只青椒。记录日记、随笔、摘抄与胡言乱语，收藏平凡日子里的点点滴滴。",
  keywords: ["青椒", "im lyy", "博客", "日记", "随笔", "生活记录"],
  // 发布到域名时设置 SITE_URL，例如 https://example.com。
  url: import.meta.env.SITE_URL || "http://localhost:4321",
};

export const headerConfig = {
  title: "青椒",
  navLinks: [
    { name: "首页", icon: "icon-[bx--bxs-home-circle]", url: withBase("/") },
    { name: "文章", icon: "icon-[material-symbols--article]", url: withBase("/posts/") },
    { name: "留言", icon: "icon-[basil--comment-solid]", url: withBase("/messages/") },
    { name: "友链", icon: "icon-[mingcute--link-3-line]", url: withBase("/friends/") },
    { name: "关于", icon: "icon-[mynaui--indifferent-ghost-solid]", url: withBase("/about/") },
  ],
};

export const welcomeConfig = {
  title: "欢迎来到青椒的小站",
  subTitle: "醒时风拂衣，情动忽提笔。",
  bgImage: withBase("/images/hero.webp"),
};

export const personalInfo = {
  name: "青椒",
  englishName: "im lyy",
  avatar: withBase("/images/avatar.jpg"),
  role: "来自青椒星球的一只青椒",
  bio: "醒时风拂衣，情动忽提笔。",
  github: "https://github.com/ildpulaoyy",
  socialLinks: [
    { name: "GitHub", icon: "icon-[jam--github]", url: "https://github.com/ildpulaoyy" },
    { name: "RSS 订阅", icon: "icon-[lucide--rss]", url: withBase("/rss.xml") },
    { name: "留言板", icon: "icon-[lucide--mail]", url: withBase("/messages/") },
  ],
};
