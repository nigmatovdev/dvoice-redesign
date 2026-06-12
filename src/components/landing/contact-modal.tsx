"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { type DictKey } from "@/lib/i18n";

import { useLang } from "./lang-provider";

interface ModalContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextValue | null>(null);

/** Provides the access/partner contact modal and renders it once. */
export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && <ContactModal onClose={close} />}
    </ModalContext.Provider>
  );
}

export function useContactModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useContactModal must be used within <ContactModalProvider>");
  return ctx;
}

/** Button that opens the contact modal. */
export function AccessButton({
  k = "cta_get_access",
  className = "btn btn-primary",
}: {
  k?: DictKey;
  className?: string;
}) {
  const { open } = useContactModal();
  const { t } = useLang();
  return (
    <button type="button" className={className} onClick={open}>
      {t(k)}
    </button>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Close on Escape; focus the first field on open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    firstFieldRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // No backend yet — simulate a request, then show the success state.
    // Wire this to a server action / API route when the backend exists.
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 600);
  };

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={dialogRef}>
        <button type="button" className="modal-x" onClick={onClose} aria-label={t("modal_close")}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {sent ? (
          <div className="modal-success">
            <div className="modal-check">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l4 4L19 7" />
              </svg>
            </div>
            <h3 id="modal-title">{t("modal_success_t")}</h3>
            <p>{t("modal_success_d")}</p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              {t("modal_close")}
            </button>
          </div>
        ) : (
          <>
            <div className="eyebrow" style={{ background: "var(--blueSoft)", color: "var(--blue)" }}>
              <span className="dot" style={{ background: "var(--blue)" }} />
              <span>{t("cta_partner")}</span>
            </div>
            <h3 id="modal-title" className="modal-title">
              {t("modal_title")}
            </h3>
            <p className="modal-sub">{t("modal_sub")}</p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <label className="field">
                <span>{t("modal_company")}</span>
                <input ref={firstFieldRef} name="company" type="text" required autoComplete="organization" placeholder={t("modal_company_ph")} />
              </label>
              <label className="field">
                <span>{t("modal_position")}</span>
                <input name="position" type="text" required autoComplete="organization-title" placeholder={t("modal_position_ph")} />
              </label>
              <label className="field">
                <span>{t("modal_name")}</span>
                <input name="fullName" type="text" required autoComplete="name" placeholder={t("modal_name_ph")} />
              </label>
              <label className="field">
                <span>{t("modal_phone")}</span>
                <input name="phone" type="tel" required autoComplete="tel" placeholder={t("modal_phone_ph")} />
              </label>
              <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                {sending ? t("modal_sending") : t("modal_submit")}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
