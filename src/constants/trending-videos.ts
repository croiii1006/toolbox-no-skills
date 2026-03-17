/**
 * Shared trending video data source.
 * Used by: ReplicateWorkspace (近期热门), App Plaza showcase (灵感库)
 */

const COVER_GRADIENTS = [
  'from-rose-500/60 to-orange-400/60',
  'from-blue-500/60 to-cyan-400/60',
  'from-violet-500/60 to-purple-400/60',
  'from-emerald-500/60 to-green-400/60',
  'from-amber-500/60 to-yellow-400/60',
  'from-pink-500/60 to-rose-400/60',
  'from-indigo-500/60 to-blue-400/60',
  'from-red-500/60 to-rose-400/60',
  'from-teal-500/60 to-cyan-400/60',
  'from-fuchsia-500/60 to-pink-400/60',
];

export interface TrendingVideoItem {
  id: string;
  title: string;
  desc: string;
  views: string;
  likes: string;
  coverGradient: string;
}

export const TRENDING_VIDEOS: TrendingVideoItem[] = [
  { id: 't1', title: 'Red Bull 极限运动混剪', desc: '高动态风格化饮料广告，播放量 67 万', views: '67万', likes: '1.5万', coverGradient: COVER_GRADIENTS[0] },
  { id: 't2', title: '护肤品成分可视化', desc: '透明质酸分子动画 + 产品展示，播放量 120 万', views: '120万', likes: '8.5万', coverGradient: COVER_GRADIENTS[1] },
  { id: 't3', title: '咖啡拉花慢镜头', desc: '极致美学慢动作咖啡制作过程，播放量 89 万', views: '89万', likes: '6.2万', coverGradient: COVER_GRADIENTS[2] },
  { id: 't4', title: '运动鞋 360° 展示', desc: 'AI 生成运动鞋旋转展示 + 科技感特效，播放量 210 万', views: '210万', likes: '15万', coverGradient: COVER_GRADIENTS[3] },
  { id: 't5', title: '美妆变装挑战', desc: '素颜到精致妆容的变装视频，播放量 450 万', views: '450万', likes: '32万', coverGradient: COVER_GRADIENTS[4] },
  { id: 't6', title: '零食开箱 ASMR', desc: '沉浸式零食开箱与试吃体验，播放量 95 万', views: '95万', likes: '7.1万', coverGradient: COVER_GRADIENTS[5] },
  { id: 't7', title: '宠物日常 Vlog', desc: '萌宠搞笑日常合集，播放量 380 万', views: '380万', likes: '28万', coverGradient: COVER_GRADIENTS[6] },
  { id: 't8', title: '家居好物分享', desc: '高颜值家居收纳神器展示，播放量 150 万', views: '150万', likes: '9.8万', coverGradient: COVER_GRADIENTS[7] },
  { id: 't9', title: '健身教程 30 秒', desc: '快节奏居家健身动作教学，播放量 260 万', views: '260万', likes: '18万', coverGradient: COVER_GRADIENTS[8] },
  { id: 't10', title: '美食制作过程', desc: '从食材到成品的高速剪辑，播放量 310 万', views: '310万', likes: '22万', coverGradient: COVER_GRADIENTS[9] },
  { id: 't11', title: '旅行目的地推荐', desc: '航拍 + 转场的旅行短视频，播放量 180 万', views: '180万', likes: '12万', coverGradient: COVER_GRADIENTS[0] },
  { id: 't12', title: '穿搭灵感合集', desc: '一周七套 OOTD 快速换装，播放量 220 万', views: '220万', likes: '16万', coverGradient: COVER_GRADIENTS[1] },
  { id: 't13', title: '新能源车体验', desc: '智能座舱功能展示与驾驶体验，播放量 95 万', views: '95万', likes: '6.8万', coverGradient: COVER_GRADIENTS[2] },
  { id: 't14', title: '手工 DIY 教程', desc: '创意手工制作全过程，播放量 130 万', views: '130万', likes: '9.2万', coverGradient: COVER_GRADIENTS[3] },
  { id: 't15', title: '数码产品开箱', desc: '最新科技产品首发开箱测评，播放量 170 万', views: '170万', likes: '11万', coverGradient: COVER_GRADIENTS[4] },
  { id: 't16', title: '母婴好物推荐', desc: '实用母婴产品真实测评，播放量 88 万', views: '88万', likes: '5.6万', coverGradient: COVER_GRADIENTS[5] },
  { id: 't17', title: '潮玩盲盒拆箱', desc: '限定款潮玩开箱 + 收藏展示，播放量 240 万', views: '240万', likes: '17万', coverGradient: COVER_GRADIENTS[6] },
  { id: 't18', title: '户外露营 Vlog', desc: '精致露营场景布置与体验分享，播放量 160 万', views: '160万', likes: '10万', coverGradient: COVER_GRADIENTS[7] },
  { id: 't19', title: '香水测评合集', desc: '多款热门香水对比与推荐，播放量 110 万', views: '110万', likes: '7.8万', coverGradient: COVER_GRADIENTS[8] },
  { id: 't20', title: '街头美食探店', desc: '各地特色街头美食打卡，播放量 290 万', views: '290万', likes: '20万', coverGradient: COVER_GRADIENTS[9] },
  { id: 't21', title: '书桌布置灵感', desc: '学习/办公桌面改造与好物分享，播放量 75 万', views: '75万', likes: '4.8万', coverGradient: COVER_GRADIENTS[0] },
  { id: 't22', title: '国风汉服展示', desc: '汉服穿搭 + 古风场景拍摄，播放量 340 万', views: '340万', likes: '25万', coverGradient: COVER_GRADIENTS[1] },
  { id: 't23', title: '智能家居体验', desc: '全屋智能联动场景展示，播放量 85 万', views: '85万', likes: '5.2万', coverGradient: COVER_GRADIENTS[2] },
  { id: 't24', title: '乐器演奏短片', desc: '钢琴/吉他热门曲目演奏，播放量 200 万', views: '200万', likes: '14万', coverGradient: COVER_GRADIENTS[3] },
  { id: 't25', title: '创意广告混剪', desc: '全球优秀创意广告精选混剪，播放量 145 万', views: '145万', likes: '9.5万', coverGradient: COVER_GRADIENTS[4] },
  { id: 't26', title: '夜市美食合集', desc: '夜市小吃制作过程特写，播放量 270 万', views: '270万', likes: '19万', coverGradient: COVER_GRADIENTS[5] },
  { id: 't27', title: '职场穿搭指南', desc: '通勤风 OOTD 搭配建议，播放量 92 万', views: '92万', likes: '6.1万', coverGradient: COVER_GRADIENTS[6] },
  { id: 't28', title: '甜品制作教程', desc: '高颜值甜品从零制作过程，播放量 185 万', views: '185万', likes: '13万', coverGradient: COVER_GRADIENTS[7] },
  { id: 't29', title: '滑板技巧展示', desc: '街头滑板花式动作合集，播放量 320 万', views: '320万', likes: '23万', coverGradient: COVER_GRADIENTS[8] },
  { id: 't30', title: '品牌联名开箱', desc: '热门品牌联名款产品首发开箱，播放量 155 万', views: '155万', likes: '10万', coverGradient: COVER_GRADIENTS[9] },
];
