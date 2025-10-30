import React from "react";

export default function Videos() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        مشاهدة فيديوهات المهندس أحمد عبده مرشح نائب رئيس مجلس إدارة نادي سموحة 🎬
      </h2>

      <div className="row">
        {/* الفيديو 1 */}
        <div className="col-md-4 mb-4">
          <video width="100%" controls>
            <source src="/videos/v1.mp4" type="video/mp4" />
            المتصفح لا يدعم تشغيل الفيديو.
          </video>
        </div>

        {/* الفيديو 2 */}
        <div className="col-md-4 mb-4">
          <video width="100%" controls>
            <source src="/videos/v2.mp4" type="video/mp4" />
            المتصفح لا يدعم تشغيل الفيديو.
          </video>
        </div>

        {/* الفيديو 3 */}
        <div className="col-md-4 mb-4">
          <video width="100%" controls>
            <source src="/videos/v3.mp4" type="video/mp4" />
            المتصفح لا يدعم تشغيل الفيديو.
          </video>
        </div>

        {/* الفيديو 4 */}
        <div className="col-md-4 mb-4">
          <video width="100%" controls>
            <source src="/videos/v4.mp4" type="video/mp4" />
            المتصفح لا يدعم تشغيل الفيديو.
          </video>
        </div>

        {/* الفيديو 5 */}
        <div className="col-md-4 mb-4">
          <video width="100%" controls>
            <source src="/videos/v5.mp4" type="video/mp4" />
            المتصفح لا يدعم تشغيل الفيديو.
          </video>
        </div>

        {/* الفيديو 6 */}
        <div className="col-md-4 mb-4">
          <video width="100%" controls>
            <source src="/videos/v6.mp4" type="video/mp4" />
            المتصفح لا يدعم تشغيل الفيديو.
          </video>
        </div>

        {/* الفيديو 7 */}
        <div className="col-md-4 mb-4">
          <video width="100%" controls>
            <source src="/videos/v7.mp4" type="video/mp4" />
            المتصفح لا يدعم تشغيل الفيديو.
          </video>
        </div>

        {/* الفيديو 8 */}
        <div className="col-md-4 mb-4">
          <video width="100%" controls>
            <source src="/videos/v8.mp4" type="video/mp4" />
            المتصفح لا يدعم تشغيل الفيديو.
          </video>
        </div>
      </div>
    </div>
  );
}
