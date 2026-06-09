"use client";

import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    type: "community",
    header: null,
    content:
      "Chào mn, mình 07 hiện đang học năm 1. Dạo này mình thấy hơi mất động lực chút nên muốn tìm bạn học cùng kiểu như trao đổi về mục tiêu, todo hàng ngày, trò chuyện thúc đẩy nhau...",
    sub: "Hiện tại mình đang tập trung học ngoại ngữ (tiếng anh). Nếu bạn ở TPHCM thì tụi mình có thể đi học off hay chạy bộ gì đó 🙂",
  },
  {
    id: 2,
    type: "facebook",
    header: {
      avatar: "🐱",
      user: "hanim_1808",
      group: "The Weeknd Bangkok",
      time: "18 giờ",
    },
    content:
      "Bạn nào đi the Weeknd D2 một mình có thể cho mình ghép chung team với được không ạ. Tại bạn mình có việc bận nên chỉ còn mình đi thôi ạ. Rất mong được ghép team với các bạn nữ ạ. T ở Hà Nội ạ. 🥲😊🤗",
    reactions: { likes: 4, comments: 11 },
  },
  {
    id: 3,
    type: "seoul",
    header: "[TÌM BẠN ĐI CHƠI Ở SEOUL 🇰🇷]",
    content:
      "Mình tên Daniel, và chỉ đi solo trip tại Seoul từ ngày 21-25 tháng 5. Mình muốn tìm bạn đi chơi cùng, nên bạn nào ở Seoul hoặc đi du lịch và muốn có người đi cùng thì inbox mình nhé 🌻",
    sub: "Mình cảm ơn ạaa",
  },
];

export default function HookSection() {
  return (
    <section
      id="about"
      className="pt-24 pb-20 px-6 md:px-12 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display font-black italic text-5xl md:text-7xl lg:text-8xl uppercase text-black leading-none mb-12"
        >
          WHEN PEOPLE
          <br />
          TRY TO...
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gray-50 border border-gray-200 p-5 rounded-lg"
          >
            <p className="font-body text-xs text-gray-500 mb-3">
              {posts[0].content.split(".")[0]}.
            </p>
            <p className="font-body text-sm text-gray-700 leading-relaxed">
              {posts[0].content.split(".").slice(1).join(".")}
            </p>
            <p className="font-body text-sm text-gray-600 mt-3 leading-relaxed">
              {posts[0].sub}
            </p>
            <button className="mt-3 font-body text-xs text-[#FF0090] font-semibold">
              See less
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">
                  🐱
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-black leading-tight">
                    hanim_1808
                  </p>
                  <p className="font-body text-xs text-gray-500">
                    The Weeknd Bangkok · 18 giờ
                  </p>
                </div>
              </div>
              <p className="font-body text-sm text-gray-700 leading-relaxed">
                {posts[1].content}
              </p>
            </div>
            <div className="px-4 pb-3 border-t border-gray-100 pt-2 flex items-center gap-4">
              <span className="font-body text-xs text-gray-500">❤️ 4</span>
              <span className="font-body text-xs text-gray-500">💬 11</span>
              <span className="font-body text-xs text-gray-500">↩ 2</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gray-50 border border-gray-200 p-5 rounded-lg"
          >
            <p className="font-display font-bold text-sm text-black uppercase mb-3">
              [TÌM BẠN ĐI CHƠI Ở SEOUL 🇰🇷]
            </p>
            <p className="font-body text-xs text-gray-500 mb-2">Chào mn ạ,</p>
            <p className="font-body text-sm text-gray-700 leading-relaxed mb-3">
              {posts[2].content}
            </p>
            <p className="font-body text-xs text-gray-500">{posts[2].sub}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
