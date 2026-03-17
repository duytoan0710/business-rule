import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Coffee, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft,
  BookOpen,
  Scale,
  UserCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// --- Types ---
interface StoryStep {
  id: number;
  title: string;
  content: string;
  technicalTerm?: string;
  icon: React.ReactNode;
  example: string;
  color: string;
}

// --- Content Data ---
const storySteps: StoryStep[] = [
  {
    id: 1,
    title: "Business Rule là gì?",
    content: "Hãy quay lại quán cà phê của bạn. Bạn quy định: 'Khách phải trả tiền trước khi nhận nước'. Đây chính là một Quy tắc nghiệp vụ (Business Rule). Nó là những 'luật chơi' mà doanh nghiệp đặt ra để vận hành. Nếu không có luật này, quán sẽ loạn ngay lập tức!",
    technicalTerm: "Definition of Business Rule",
    icon: <Coffee className="w-6 h-6" />,
    example: "Quy tắc: 'Mọi đơn hàng trên 500k đều được miễn phí vận chuyển'.",
    color: "amber"
  },
  {
    id: 2,
    title: "Luật có trước, Máy có sau",
    content: "Điểm đặc biệt là Business Rule tồn tại độc lập với công nghệ. Dù bạn ghi sổ tay hay dùng app xịn, thì cái luật 'trả tiền trước' vẫn không đổi. Phần mềm chỉ là công cụ để thực thi cái luật đó một cách tự động và chính xác hơn mà thôi.",
    technicalTerm: "Technology Independence",
    icon: <Scale className="w-6 h-6" />,
    example: "Dù bán hàng tại quầy hay qua App, quy tắc 'Giảm giá 10% cho thành viên' vẫn phải được áp dụng đồng nhất.",
    color: "blue"
  },
  {
    id: 3,
    title: "Các 'hình dáng' của Business Rule",
    content: "Business Rule không chỉ là cấm đoán. Nó có thể là một công thức tính toán (ví dụ: cách tính điểm tích lũy) hoặc một điều kiện ràng buộc (ví dụ: chỉ admin mới được xóa hóa đơn). BA phải 'đào bới' để tìm ra tất cả các hình dáng này.",
    technicalTerm: "Types of Business Rules",
    icon: <CheckCircle2 className="w-6 h-6" />,
    example: "Công thức: 'Điểm tích lũy = 1% giá trị đơn hàng'. Ràng buộc: 'Không được hủy đơn khi đã giao cho shipper'.",
    color: "emerald"
  },
  {
    id: 4,
    title: "Tại sao BA phải 'thuộc lòng' luật?",
    content: "Nếu BA không nắm rõ Business Rule, lập trình viên sẽ tạo ra một phần mềm 'vô kỷ luật'. Một phần mềm chạy sai luật nghiệp vụ còn nguy hiểm hơn là một phần mềm bị lỗi kỹ thuật, vì nó trực tiếp gây thiệt hại về tiền bạc và uy tín cho doanh nghiệp.",
    technicalTerm: "The Role of BA",
    icon: <ShieldCheck className="w-6 h-6" />,
    example: "Nếu hệ thống quên áp dụng quy tắc 'Không cho rút quá số dư', ngân hàng sẽ phá sản chỉ sau một đêm!",
    color: "rose"
  }
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < storySteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = storySteps[currentStep];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans selection:bg-indigo-100">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-amber-100/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-100/30 blur-[120px] rounded-full" />
      </div>

      {/* Header Section */}
      <header className="relative z-10 max-w-5xl mx-auto pt-16 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-stone-100 mb-8"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-stone-500">ITBA Journey • Storytelling</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-serif italic text-stone-900 leading-[1.1] mb-4">
          Khám phá: <br />
          <span className="not-italic font-sans font-black tracking-tight text-stone-900">Business Rules là gì?</span>
        </h1>
        <p className="max-w-2xl mx-auto text-stone-500 text-lg md:text-xl font-light leading-relaxed">
          Biến những thuật ngữ khô khan thành câu chuyện đời thường dễ hiểu cho người mới bắt đầu.
        </p>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 mt-20 pb-32">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          
          {/* Main Content Area */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[40px] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white relative overflow-hidden"
              >
                {/* Step Indicator */}
                <div className="absolute top-8 right-12 text-8xl font-black text-stone-50/80 pointer-events-none select-none">
                  0{step.id}
                </div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-${step.color}-100 bg-${step.color}-50 text-${step.color}-600`}>
                  {step.icon}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-stone-900 tracking-tight">
                  {step.title}
                </h2>

                <div className="prose prose-stone prose-lg max-w-none">
                  <p className="text-stone-600 leading-relaxed text-xl font-light text-justify">
                    {step.content}
                  </p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`mt-12 p-8 rounded-3xl border flex gap-6 items-start transition-colors duration-500 bg-${step.color}-50/50 border-${step.color}-200/60 shadow-sm shadow-${step.color}-100/20`}
                >
                  <div className={`mt-1 p-2 bg-white rounded-xl shadow-sm text-${step.color}-600`}>
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] block mb-2 text-${step.color}-600/80`}>Ví dụ thực tế</span>
                    <p className="text-stone-800 text-lg font-serif italic leading-relaxed">
                      "{step.example}"
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between bg-white/50 backdrop-blur-md p-4 rounded-full border border-white shadow-sm">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`p-4 rounded-full transition-all ${
                  currentStep === 0 
                    ? 'text-stone-300 cursor-not-allowed' 
                    : 'text-stone-600 hover:bg-white hover:shadow-md active:scale-95'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-3">
                {storySteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      idx === currentStep ? 'w-12 bg-stone-900' : 'w-2 bg-stone-200 hover:bg-stone-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextStep}
                disabled={currentStep === storySteps.length - 1}
                className={`p-4 rounded-full transition-all ${
                  currentStep === storySteps.length - 1 
                    ? 'text-stone-300 cursor-not-allowed' 
                    : 'text-stone-900 hover:bg-white hover:shadow-md active:scale-95'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Sidebar: Technical Insights */}
          <aside className="space-y-6">
            <div className="bg-stone-900 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-all duration-700" />
              
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-white/10 rounded-lg">
                  <BookOpen className="w-4 h-4 text-amber-300" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Thuật ngữ chuyên môn</span>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-serif italic text-amber-300 mb-4 tracking-tight">
                    {step.technicalTerm}
                  </h3>
                  <div className="h-px w-12 bg-white/20 mb-6" />
                  <p className="text-stone-400 leading-relaxed font-light text-justify">
                    {currentStep === 0 && "Business Rules là trái tim của mọi hệ thống phần mềm, định nghĩa cách doanh nghiệp vận hành."}
                    {currentStep === 1 && "Luật nghiệp vụ luôn tồn tại trước công nghệ. BA cần tách biệt rõ luật và cách thực thi luật."}
                    {currentStep === 2 && "Business Rules có thể là các công thức tính toán, các điều kiện ràng buộc hoặc các quy trình ra quyết định."}
                    {currentStep === 3 && "Nhiệm vụ tối thượng của BA là đảm bảo phần mềm tuân thủ tuyệt đối các quy tắc nghiệp vụ."}
                  </p>
                </div>


              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] border border-stone-100 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-5 h-5 text-indigo-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">BA Tips</span>
              </div>
              <p className="text-stone-600 text-lg font-serif italic leading-relaxed">
                "Hãy học cách quan sát thế giới xung quanh. Mọi quy tắc trong đời thực đều có thể trở thành logic trong phần mềm."
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-400">
                  BA
                </div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                  Chuyên gia chia sẻ
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-16 border-t border-stone-200/50 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white font-black text-xs">
            IT
          </div>
          <p className="text-xs text-stone-400 font-medium tracking-widest uppercase">ITBA Storyteller • 2026</p>
        </div>
        
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
          <a href="#" className="hover:text-stone-900 transition-colors">Facebook</a>
          <a href="#" className="hover:text-stone-900 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Community</a>
        </div>
      </footer>
    </div>
  );
}
