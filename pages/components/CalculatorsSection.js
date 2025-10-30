import Link from 'next/link';
import { 
  FaCalculator, 
  FaRegCalendarCheck, 
  FaChartLine, 
  FaRegClock, 
  FaHeart 
} from 'react-icons/fa';

export default function CalculatorsSection() {
  return (
    <section className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <FaCalculator className="w-6 h-6 text-orange-600" />
          Pregnancy Calculators & Tools
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Essential tools to help you track and plan your pregnancy journey
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Due Date Calculator */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Due Date Calculator</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaRegCalendarCheck className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LMP-based Calculation</h4>
                  <p className="text-gray-600 text-sm">Pregnancy is calculated from the first day of your last menstrual period</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ultrasound Accuracy</h4>
                  <p className="text-gray-600 text-sm">Early scans provide precise gestational age measurements</p>
                </div>
              </div>
            </div>
            
            <Link
              href="/pregnancy/pregnancy-due-date-calculator"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center group"
            >
              <FaCalculator className="w-4 h-4 transition-transform group-hover:scale-110" />
              Calculate Your Due Date
            </Link>
          </div>
          
          {/* Ovulation Calculator */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Ovulation Calculator</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaRegClock className="w-4 h-4 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cycle Tracking</h4>
                  <p className="text-gray-600 text-sm">Track your menstrual cycle to identify fertile windows</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaHeart className="w-4 h-4 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fertility Insights</h4>
                  <p className="text-gray-600 text-sm">Understand your natural fertility patterns</p>
                </div>
              </div>
            </div>
            
            <Link
              href="/pregnancy/ovulation-calculator"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center group"
            >
              <FaCalculator className="w-4 h-4 transition-transform group-hover:scale-110" />
              Calculate Ovulation
            </Link>
          </div>
        </div>

        {/* Additional Tools Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">More Helpful Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/pregnancy/weight-gain-calculator"
              className="bg-gray-50 hover:bg-white rounded-xl p-4 text-center transition-all duration-300 border border-gray-200 hover:border-teal-200 hover:shadow-lg group"
            >
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-200 transition-colors">
                <FaChartLine className="w-5 h-5 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Weight Gain Calculator</h4>
              <p className="text-gray-600 text-xs">Track healthy pregnancy weight gain</p>
            </Link>

            <Link
              href="/pregnancy/kick-counter"
              className="bg-gray-50 hover:bg-white rounded-xl p-4 text-center transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:shadow-lg group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                <FaHeart className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Kick Counter</h4>
              <p className="text-gray-600 text-xs">Monitor your baby's movements</p>
            </Link>

            <Link
              href="/pregnancy/contraction-timer"
              className="bg-gray-50 hover:bg-white rounded-xl p-4 text-center transition-all duration-300 border border-gray-200 hover:border-purple-200 hover:shadow-lg group"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                <FaRegClock className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Contraction Timer</h4>
              <p className="text-gray-600 text-xs">Time contractions during labor</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}