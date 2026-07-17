import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { Reveal, GoldRule } from "./Reveal";
import { LAZYFORMS_ENDPOINT } from "../data/content";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  message: "",
};

const Field = ({ label, name, type = "text", value, onChange, error, required, ...rest }) => (
  <div className="flex flex-col">
    <label className="maza-body text-[#F3EFE6]/60 text-xs tracking-[0.2em] uppercase mb-2">
      {label} {required && <span className="text-[#B19963]">*</span>}
    </label>
    <input
      data-testid={`res-${name}`}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`bg-transparent border-b py-3 text-[#F3EFE6] maza-body font-light outline-none transition-colors focus:border-[#B19963] placeholder:text-[#F3EFE6]/25 ${
        error ? "border-red-400/70" : "border-[#B19963]/30"
      }`}
      {...rest}
    />
    {error && (
      <span data-testid={`err-${name}`} className="maza-body text-red-300/80 text-xs mt-1.5">
        {error}
      </span>
    )}
  </div>
);

const Reservation = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Bitte Vorname angeben.";
    if (!form.lastName.trim()) e.lastName = "Bitte Nachname angeben.";
    if (!form.email.trim()) e.email = "Bitte E-Mail angeben.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Bitte gültige E-Mail angeben.";
    if (!form.phone.trim()) e.phone = "Bitte Telefonnummer angeben.";
    if (!form.date) e.date = "Bitte Datum wählen.";
    if (!form.time) e.time = "Bitte Uhrzeit wählen.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const data = new FormData();
      data.append("Vorname", form.firstName);
      data.append("Nachname", form.lastName);
      data.append("E-Mail", form.email);
      data.append("Telefon", form.phone);
      data.append("Datum", form.date);
      data.append("Uhrzeit", form.time);
      data.append("Personen", form.guests);
      data.append("Nachricht", form.message);
      const res = await fetch(LAZYFORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initial);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="reservierung"
      data-testid="reservation-section"
      className="relative py-24 md:py-36 bg-[#08231D]"
    >
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <p className="maza-body text-[#B19963] text-xs tracking-[0.35em] uppercase mb-5">
              Reservierung
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="maza-heading text-3xl md:text-4xl lg:text-5xl font-light text-[#F3EFE6] leading-tight">
              Ein Tisch. Ein Abend.<br className="hidden md:block" /> Eine besondere Reise.
            </h2>
          </Reveal>
          <GoldRule className="mx-auto my-8" width="5rem" />
          <Reveal delay={0.1}>
            <p className="maza-body text-[#F3EFE6]/70 text-base md:text-lg font-light max-w-xl mx-auto">
              Reservieren Sie Ihren Tisch und erleben Sie afghanische Küche in einer
              Atmosphäre voller Eleganz, Wärme und Gastfreundschaft.
            </p>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              data-testid="res-success"
              className="text-center border border-[#B19963]/30 py-16 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#B19963] text-[#B19963] mb-6">
                <Check strokeWidth={1.2} size={30} />
              </span>
              <h3 className="maza-heading text-2xl md:text-3xl text-[#F3EFE6] font-light mb-4">
                Vielen Dank für Ihre Anfrage
              </h3>
              <p className="maza-body text-[#F3EFE6]/70 font-light max-w-md mx-auto">
                Wir haben Ihre Reservierungsanfrage erhalten und melden uns in Kürze.
                Ihre Reservierung ist erst nach unserer Bestätigung verbindlich.
              </p>
              <button
                data-testid="res-reset-btn"
                onClick={() => setStatus("idle")}
                className="maza-body text-xs tracking-[0.22em] uppercase mt-8 px-8 py-3 border border-[#B19963]/50 text-[#B19963] hover:bg-[#B19963] hover:text-[#071E19] transition-colors"
              >
                Neue Anfrage
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              data-testid="reservation-form"
              onSubmit={onSubmit}
              noValidate
              className="grid md:grid-cols-2 gap-x-8 gap-y-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Field label="Vorname" name="firstName" value={form.firstName} onChange={onChange} error={errors.firstName} required />
              <Field label="Nachname" name="lastName" value={form.lastName} onChange={onChange} error={errors.lastName} required />
              <Field label="E-Mail" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} required />
              <Field label="Telefon" name="phone" type="tel" value={form.phone} onChange={onChange} error={errors.phone} required />
              <Field label="Datum" name="date" type="date" value={form.date} onChange={onChange} error={errors.date} required />
              <Field label="Uhrzeit" name="time" type="time" value={form.time} onChange={onChange} error={errors.time} required />

              <div className="flex flex-col">
                <label className="maza-body text-[#F3EFE6]/60 text-xs tracking-[0.2em] uppercase mb-2">
                  Anzahl der Personen
                </label>
                <select
                  data-testid="res-guests"
                  name="guests"
                  value={form.guests}
                  onChange={onChange}
                  className="bg-transparent border-b border-[#B19963]/30 py-3 text-[#F3EFE6] maza-body font-light outline-none focus:border-[#B19963] transition-colors [&>option]:bg-[#08231D]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Person" : "Personen"}</option>
                  ))}
                  <option value="9+">9+ Personen</option>
                </select>
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="maza-body text-[#F3EFE6]/60 text-xs tracking-[0.2em] uppercase mb-2">
                  Nachricht oder besondere Wünsche
                </label>
                <textarea
                  data-testid="res-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={onChange}
                  className="bg-transparent border-b border-[#B19963]/30 py-3 text-[#F3EFE6] maza-body font-light outline-none focus:border-[#B19963] transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p data-testid="res-error" className="md:col-span-2 maza-body text-red-300/90 text-sm text-center">
                  Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder
                  kontaktieren Sie uns telefonisch.
                </p>
              )}

              <div className="md:col-span-2 flex flex-col items-center gap-5 mt-4">
                <button
                  data-testid="reservation-submit-btn"
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 maza-body text-xs tracking-[0.22em] uppercase px-12 py-4 bg-[#B19963] text-[#071E19] hover:bg-[#c5ac74] transition-colors duration-400 disabled:opacity-60 min-w-[240px]"
                >
                  {status === "loading" ? (
                    <><Loader2 className="animate-spin" size={16} /> Wird gesendet…</>
                  ) : (
                    "Reservierung anfragen"
                  )}
                </button>
                <p className="maza-body text-[#F3EFE6]/40 text-xs text-center max-w-md">
                  Ihre Reservierung wird erst nach unserer Bestätigung verbindlich. Ihre
                  Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Reservation;
